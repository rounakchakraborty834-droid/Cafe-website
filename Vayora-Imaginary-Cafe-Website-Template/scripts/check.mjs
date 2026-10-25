import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
function check(ok, message) { (ok ? passed : errors).push(message); }
const passed = [];

for (const file of ['index.html', 'journal.html', 'src/config.js', 'src/main.js', 'src/article.js', 'scripts/server.mjs', 'scripts/check.mjs']) {
  check(fs.existsSync(path.join(ROOT, file)), `required file exists: ${file}`);
}
for (const file of ['src/main.js', 'src/article.js', 'src/config.js', 'scripts/server.mjs', 'scripts/check.mjs']) {
  const result = spawnSync(process.execPath, ['--check', path.join(ROOT, file)], { encoding: 'utf8' });
  check(result.status === 0, `JavaScript syntax: ${file}${result.status === 0 ? '' : ` — ${result.stderr.trim()}`}`);
}

const htmlFiles = ['index.html', 'journal.html'];
const pages = Object.fromEntries(htmlFiles.map((file) => [file, read(file)]));
for (const [file, html] of Object.entries(pages)) {
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  check(duplicates.length === 0, `unique IDs in ${file}${duplicates.length ? ` — duplicates: ${[...new Set(duplicates)].join(', ')}` : ''}`);
  const idSet = new Set(ids);
  const fragmentLinks = [...html.matchAll(/\bhref=["']#([^"']+)["']/g)].map((match) => match[1]);
  const missing = fragmentLinks.filter((id) => !idSet.has(id));
  check(missing.length === 0, `internal anchor links in ${file}${missing.length ? ` — missing: ${[...new Set(missing)].join(', ')}` : ''}`);
  for (const match of html.matchAll(/(?:src|href)=["']((?:src|assets)\/[^"'#?]+)["']/g)) {
    check(fs.existsSync(path.join(ROOT, match[1])), `local asset reference in ${file}: ${match[1]}`);
  }
}

const configSource = read('src/config.js');
check(configSource.includes('window.CAFE_CONFIG'), 'central café configuration is present');
check(configSource.includes('menuItems:'), 'menu items are centrally configured');
check(configSource.includes('whatsapp:'), 'WhatsApp setting is centrally configured');
check(configSource.includes('mapsUrl:'), 'map destination setting is centrally configured');
check(configSource.includes('demoMode:'), 'demo-mode switches are centrally configured');
const main = read('src/main.js');
for (const feature of ['renderFilters', 'renderMenu', 'openLightbox', 'closeLightbox', 'validWhatsAppNumber', 'ScrollTrigger', 'prefers-reduced-motion']) {
  check(main.includes(feature), `implementation includes ${feature}`);
}
check(read('src/styles.css').includes('@media (prefers-reduced-motion:reduce)'), 'reduced-motion CSS fallback exists');
check(read('README.md').includes('demo'), 'README explains demo status');

const secretPatterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /\bsk-[A-Za-z0-9]{20,}\b/, /\bAKIA[0-9A-Z]{16}\b/];
for (const rel of ['index.html', 'journal.html', 'src/config.js', 'src/main.js', 'src/article.js', 'package.json']) {
  const content = read(rel);
  check(!secretPatterns.some((pattern) => pattern.test(content)), `no obvious secret patterns in ${rel}`);
}

const externalImageCount = (configSource.match(/https:\/\/images\.pexels\.com\/photos\//g) || []).length;
if (externalImageCount) warnings.push(`${externalImageCount} Pexels image URL references are configured for remote loading; this offline environment could not verify their network response or create local optimized copies.`);
if (!fs.existsSync(path.join(ROOT, 'package-lock.json'))) warnings.push('package-lock.json not created yet.');

for (const message of passed) process.stdout.write(`PASS ${message}\n`);
for (const message of warnings) process.stdout.write(`WARN ${message}\n`);
for (const message of errors) process.stderr.write(`FAIL ${message}\n`);
process.stdout.write(`\nSummary: ${passed.length} passed, ${warnings.length} warning(s), ${errors.length} failed.\n`);
if (errors.length) process.exitCode = 1;
