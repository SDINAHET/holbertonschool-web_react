// task_4/dashboard/staticAssets_testRunner.js
/* Vérifie :
   - favicon référencé dans index.html
   - existence des fichiers assets (favicon, logo, close-icon)
   - import + rendu <img> corrects dans App.(js|jsx) et Notifications.(js|jsx)
   Sortie attendue par checker : "OK" (sinon "NOK")
*/
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const ASSETS = path.join(SRC, 'assets');

const files = {
  indexHtml: path.join(ROOT, 'index.html'),
  appJsx: ['App.jsx', 'App.js'].map(f => path.join(SRC, f)).find(f => fs.existsSync(f)),
  notifJsx: ['Notifications.jsx', 'Notifications.js'].map(f => path.join(SRC, f)).find(f => fs.existsSync(f)),
  favicon: path.join(ASSETS, 'favicon.ico'),
  logo: path.join(ASSETS, 'holberton-logo.jpg'),
  closeIcon: path.join(ASSETS, 'close-icon.png'),
};

function fail(msg) {
  console.log('NOK');
  console.error(msg);
  process.exit(0); // le checker ne lit que stdout; garder 0
}

function pass() {
  console.log('OK');
  process.exit(0);
}

// 1) Fichiers requis
if (!fs.existsSync(files.indexHtml)) fail('index.html introuvable');
if (!files.appJsx || !fs.existsSync(files.appJsx)) fail('App.jsx introuvable');
if (!files.notifJsx || !fs.existsSync(files.notifJsx)) fail('Notifications.jsx introuvable');
if (!fs.existsSync(files.favicon)) fail('favicon.ico introuvable dans src/assets');
if (!fs.existsSync(files.logo)) fail('holberton-logo.jpg introuvable dans src/assets');
if (!fs.existsSync(files.closeIcon)) fail('close-icon.png introuvable dans src/assets');

// 2) Vérifier <link rel="icon" ...> dans index.html
const indexHtml = fs.readFileSync(files.indexHtml, 'utf8');
// accepte ./src/assets/favicon.ico, src/assets/favicon.ico, ./favicon.ico, /favicon.ico
const faviconHrefRe = /<link\s+rel=["']icon["'][^>]*href=["'](?:\.?\/src\/assets\/favicon\.ico|\.?\/favicon\.ico|%PUBLIC_URL%\/favicon\.ico)["'][^>]*>/i;
if (!faviconHrefRe.test(indexHtml)) {
  fail('Balise <link rel="icon" href="..."> manquante ou chemin inattendu dans index.html');
}

// 3) Vérifier App.(js|jsx) : import + <img alt="Holberton logo">
const appSrc = fs.readFileSync(files.appJsx, 'utf8');
const appImportLogo = /import\s+\w+\s+from\s+['"]\.\/assets\/holberton-logo\.jpg['"]\s*;?/;
if (!appImportLogo.test(appSrc)) {
  fail('App.jsx doit importer "./assets/holberton-logo.jpg"');
}
const appImgAlt = /<img[^>]*alt=["']Holberton logo["'][^>]*>/i;
if (!appImgAlt.test(appSrc)) {
  fail('App.jsx doit rendre <img ... alt="Holberton logo">');
}

// 4) Vérifier Notifications.(js|jsx) : import + <img alt="close">
const notifSrc = fs.readFileSync(files.notifJsx, 'utf8');
const notifImportClose = /import\s+\w+\s+from\s+['"]\.\/assets\/close-icon\.png['"]\s*;?/;
if (!notifImportClose.test(notifSrc)) {
  fail('Notifications.jsx doit importer "./assets/close-icon.png" (pas close-button.png)');
}
const notifImgAlt = /<img[^>]*alt=["']close["'][^>]*>/i;
if (!notifImgAlt.test(notifSrc)) {
  fail('Notifications.jsx doit rendre <img ... alt="close">');
}

pass();
