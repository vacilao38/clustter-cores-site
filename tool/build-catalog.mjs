import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve(import.meta.dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'catalog.json'), 'utf8'));
assert.equal(data.schema, 1);
const apps = {};
for (const [id, p] of Object.entries(data.products)) {
  assert.match(id, /^[a-z][a-z0-9-]{0,39}$/);
  assert.match(p.version, /^\d+\.\d+\.\d+$/);
  assert.equal(p.tag, `${id}-v${p.version}`);
  assert.equal(p.prefix, `${p.name}-${p.version}`);
  assert.ok(fs.existsSync(path.join(root, 'dist', p.image)), `${id}: screenshot missing`);
  assert.ok(p.downloads.length > 0);
  for (const [label, file, size] of p.downloads) {
    assert.match(file, /^[A-Za-z0-9_.-]+\.(exe|apk|zip)$/);
    assert.equal(typeof label, 'string'); assert.equal(typeof size, 'string');
  }
  apps[id] = {};
  for (const platform of p.platforms) {
    assert.ok(['windows', 'android'].includes(platform));
    assert.ok(p.downloads.some(([, f]) => platform === 'windows' ? /\.(exe|zip)$/.test(f) : f.endsWith('.apk')));
    apps[id][platform] = {version: p.version, page: `https://vacilao38.github.io/clustter-cores-downloads/#${id}`,
      notes: p.releaseNotes ?? 'Veja as novidades e baixe a versão atual no site.'};
  }
}
fs.writeFileSync(path.join(root, 'dist/catalog.json'), JSON.stringify(data, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'dist/updates.json'), JSON.stringify({protocol: 'clustter.update', schema: 1, apps}, null, 2) + '\n');
console.log(`Catálogo e feed Update: ${Object.keys(apps).length} apps.`);
