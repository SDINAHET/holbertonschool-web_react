// task_4/dashboard/full_project_checker.mjs
// Combine 3 checkers en 1. Affiche "OK" si tout passe, sinon "NOK" (avec détails sur stderr).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const ASSETS = path.join(SRC, 'assets');

const NOW_YEAR = new Date().getFullYear();

// 👉 Ajuste ici si jamais la consigne change (close-icon vs close-button)
const CLOSE_PNG = 'close-button.png'; // d'après la consigne

// Helper I/O
const read = (p) => fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
const exists = (p) => fs.existsSync(p);

// Collect errors
const errs = [];
const err = (m) => errs.push(m);

// Files
const files = {
  indexHtml: path.join(ROOT, 'index.html'),
  appJsx: ['App.jsx', 'App.js'].map(f => path.join(SRC, f)).find(exists),
  notifJsx: ['Notifications.jsx', 'Notifications.js'].map(f => path.join(SRC, f)).find(exists),
  appCss: ['App.css'].map(f => path.join(SRC, f)).find(exists),
  notifCss: ['Notifications.css'].map(f => path.join(SRC, f)).find(exists),
  utilsJs: path.join(SRC, 'utils.js'),
  faviconPublic: path.join(ROOT, 'public', 'favicon.ico'),
  faviconSrc: path.join(ASSETS, 'favicon.ico'),
  logo: path.join(ASSETS, 'holberton-logo.jpg'),
  closePng: path.join(ASSETS, CLOSE_PNG),
  ghTxt: path.join(ROOT, 'holberton-dashboard.txt'),
};

// 0) Présence fichiers clés
[
  ['index.html', files.indexHtml],
  ['src/App.jsx|App.js', files.appJsx],
  ['src/Notifications.jsx|Notifications.js', files.notifJsx],
  ['src/Notifications.css', files.notifCss],
  ['src/utils.js', files.utilsJs],
  ['src/assets/holberton-logo.jpg', files.logo],
  [`src/assets/${CLOSE_PNG}`, files.closePng],
].forEach(([label, p]) => { if (!exists(p)) err(`${label} introuvable: ${p}`); });

// 1) Le lien déployé (task_4/dashboard/holberton-dashboard.txt)
if (!exists(files.ghTxt)) {
  err('holberton-dashboard.txt manquant (task_4/dashboard)');
} else {
  const link = read(files.ghTxt).trim();
  const urlRe = /^https?:\/\/[^\s]+$/i;
  if (!urlRe.test(link)) {
    err('Le contenu de holberton-dashboard.txt ne semble pas être une URL valide (https://...)');
  } else {
    // Optionnel: tête réseau si tu veux (désactivé par défaut)
    // on reste offline-friendly pour les checkers automatiques
  }
}

// 2) Assets: favicon (balise + fichier), logo, close button
if (exists(files.indexHtml)) {
  const html = read(files.indexHtml);

  // Title exact
  const titleOk = /<title>\s*Holberton\s*-\s*School\s*dashboard\s*<\/title>/i.test(html);
  if (!titleOk) err('index.html: <title> doit être "Holberton - School dashboard"');

  // Favicon balise: autorise /favicon.ico, ./favicon.ico, %PUBLIC_URL%/favicon.ico, ./src/assets/favicon.ico, src/assets/favicon.ico
  const favRe = /<link\s+rel=["']icon["'][^>]*href=["'](?:\/favicon\.ico|\.?\/favicon\.ico|%PUBLIC_URL%\/favicon\.ico|\.?\/src\/assets\/favicon\.ico)["'][^>]*>/i;
  if (!favRe.test(html)) {
    err('index.html: balise <link rel="icon" href="..."> absente ou chemin inattendu');
  }

  // Favicon fichier: au moins un des deux endroits doit exister
  if (!exists(files.faviconPublic) && !exists(files.faviconSrc)) {
    err('favicon.ico introuvable (public/favicon.ico OU src/assets/favicon.ico)');
  }
}

// 3) App.jsx : h1, logo import + alt, texte login, footer + getCurrentYear + Holberton School, formulaire
if (files.appJsx && exists(files.appJsx)) {
  const app = read(files.appJsx);

  // h1 "School dashboard"
  if (!/<'?h1'?\b[^>]*>\s*School\s+dashboard\s*<\//i.test(app)) {
    err('App.jsx: h1 "School dashboard" manquant');
  }

  // import logo
  if (!/import\s+\w+\s+from\s+['"]\.\/assets\/holberton-logo\.jpg['"]\s*;?/i.test(app)) {
    err('App.jsx: import "./assets/holberton-logo.jpg" manquant');
  }
  // alt "holberton logo" (case-insensitive)
  if (!/<img[^>]*alt=["']\s*holberton\s+logo\s*["']/i.test(app)) {
    err('App.jsx: <img ... alt="holberton logo"> attendu (insensible à la casse)');
  }

  // texte login
  if (!/Login\s+to\s+access\s+the\s+full\s+dashboard/i.test(app)) {
    err('App.jsx: texte "Login to access the full dashboard" manquant');
  }

  // formulaire: 2 labels (Email, Password), 2 inputs, bouton OK
  const hasEmailLbl = /<label[^>]*>\s*Email\s*<\/label>/i.test(app) || /<label[^>]*htmlFor=["']?email["']?[^>]*>\s*Email\s*<\/label>/i.test(app);
  const hasPwdLbl   = /<label[^>]*>\s*Password\s*<\/label>/i.test(app) || /<label[^>]*htmlFor=["']?password["']?[^>]*>\s*Password\s*<\/label>/i.test(app);
  const inputsCount = (app.match(/<input\b/gi) || []).length;
  const hasOkBtn    = /<button[^>]*>\s*OK\s*<\/button>/i.test(app);

  if (!hasEmailLbl) err('App.jsx: label "Email" manquant');
  if (!hasPwdLbl) err('App.jsx: label "Password" manquant');
  if (inputsCount < 2) err('App.jsx: 2 <input> attendus (email + password)');
  if (!hasOkBtn) err('App.jsx: bouton "OK" manquant');

  // footer: Copyright YEAR - Holberton School (YEAR via getCurrentYear)
  if (!/Copyright/i.test(app)) {
    err('App.jsx: texte "Copyright" attendu dans le footer');
  }
  if (!/getCurrentYear\s*\(/.test(app)) {
    err('App.jsx: le footer doit utiliser getCurrentYear() (task_1)');
  }
  if (!/Holberton\s+School/i.test(app)) {
    err('App.jsx: "Holberton School" attendu dans le footer');
  }
}

// 4) Couleur header (#e1003c) dans App.css
if (files.appCss && exists(files.appCss)) {
  const css = read(files.appCss);
  if (!/#e1003c/i.test(css)) {
    err('App.css: couleur #e1003c attendue pour le titre (cf. maquette)');
  }
} else {
  err('App.css introuvable (nécessaire pour vérifier la couleur #e1003c)');
}

// 5) Notifications.jsx : titre, bouton close avec img, 3 li, data-priority (1 default, 2 urgent), log console, HTML dangereux
if (files.notifJsx && exists(files.notifJsx)) {
  const ns = read(files.notifJsx);

  // titre
  if (!/Here\s+is\s+the\s+list\s+of\s+notifications/i.test(ns)) {
    err('Notifications.jsx: titre "Here is the list of notifications" manquant');
  }

  // bouton close (aria-label Close) + img close-button.png + alt="close"
  if (!/<button[^>]*aria-label=["']Close["'][^>]*>/i.test(ns)) {
    err('Notifications.jsx: bouton close avec aria-label="Close" manquant');
  }
  const expectImportClose = new RegExp(`import\\s+\\w+\\s+from\\s+['"]\\.\\/assets\\/${CLOSE_PNG.replace('.', '\\.')}['"]\\s*;?`, 'i');
  if (!expectImportClose.test(ns)) {
    err(`Notifications.jsx: import "./assets/${CLOSE_PNG}" manquant`);
  }
  if (!/<img[^>]*alt=["']\s*close\s*["']/i.test(ns)) {
    err('Notifications.jsx: <img ... alt="close"> attendu');
  }

  // 3 li
  const liCount = (ns.match(/<li\b/gi) || []).length;
  if (liCount < 3) err('Notifications.jsx: 3 <li> attendus');

  // data-priority: 1 default, 2 urgent
  const defaultCount = (ns.match(/data-priority=["']default["']/gi) || []).length;
  const urgentCount  = (ns.match(/data-priority=["']urgent["']/gi) || []).length;
  if (defaultCount < 1) err('Notifications.jsx: au moins 1 li data-priority="default" attendu (bleu)');
  if (urgentCount  < 2) err('Notifications.jsx: au moins 2 li data-priority="urgent" attendus (rouge)');

  // log console: "Close button has been clicked"
  if (!/Close\s+button\s+has\s+been\s+clicked/i.test(ns)) {
    err('Notifications.jsx: console.log("Close button has been clicked") attendu au clic');
  }

  // dangerouslySetInnerHTML pour getLatestNotification
  if (!/dangerouslySetInnerHTML/i.test(ns)) {
    err('Notifications.jsx: usage de dangerouslySetInnerHTML attendu pour la 3e notification');
  }
}

// 6) Notifications.css : mapping couleurs (default -> blue, urgent -> red)
if (files.notifCss && exists(files.notifCss)) {
  const nc = read(files.notifCss);
  const hasBlue = /\[data-priority=["']default["']\][^{]*\{[^}]*color\s*:\s*blue\b/i.test(nc);
  const hasRed  = /\[data-priority=["']urgent["']\][^{]*\{[^}]*color\s*:\s*red\b/i.test(nc);
  if (!hasBlue) err('Notifications.css: règle color: blue pour [data-priority="default"] manquante');
  if (!hasRed)  err('Notifications.css: règle color: red pour [data-priority="urgent"] manquante');
}

// 7) utils.js : fonctions attendues et valeur de getLatestNotification
if (exists(files.utilsJs)) {
  const u = read(files.utilsJs);
  if (!/function\s+getCurrentYear\s*\(/.test(u)) err('utils.js: function getCurrentYear() manquante');
  if (!/function\s+getFooterCopy\s*\(/.test(u)) err('utils.js: function getFooterCopy(isIndex) manquante');
  if (!/function\s+getLatestNotification\s*\(/.test(u)) err('utils.js: function getLatestNotification() manquante');
  if (!/Urgent\s+requirement/i.test(u)) err('utils.js: getLatestNotification() doit retourner "<strong>Urgent requirement</strong> - complete by EOD"');
}

// 8) Résultat
if (errs.length === 0) {
  console.log('OK');
} else {
  console.log('NOK');
  // détails en stderr
  for (const e of errs) console.error(' - ' + e);
  // code 0 pour rester compatible avec certains checkers qui ne lisent que stdout
  process.exit(0);
}
