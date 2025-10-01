#!/bin/bash
# === A lancer depuis: react_intro/task_4/dashboard ===
pass=true

ok () { echo "OK  - $1"; }
ko () { echo "NOK - $1"; pass=false; }

echo "== Vérifs tâche 8 =="
echo "(dossier courant: $(pwd))"
echo

# 0) Fichiers présents
[ -f public/favicon.ico ] && ok "1-favicon.ico présent dans public/" || ko "favicon.ico présent dans public/"
[ -f src/assets/holberton-logo.jpg ] && ok "logo holberton-logo.jpg présent dans src/assets/" || ko "logo holberton-logo.jpg présent dans src/assets/"
[ -f src/assets/close-button.png ] && ok "close-button.png présent dans src/assets/" || ko "close-button.png présent dans src/assets/"

# 1) Favicon en chemin relatif
grep -Eq '<link[^>]+rel="icon"[^>]+href="favicon\.ico"' index.html \
  && ok 'index.html -> <link rel="icon" href="favicon.ico">' \
  || ko 'index.html -> <link rel="icon" href="favicon.ico">'

# 2) App.jsx -> import image + alt + footer exact
grep -Eq 'import\s+\w+\s+from\s+"\.\/assets\/holberton-logo\.jpg"' src/App.jsx \
  && ok 'App.jsx importe ./assets/holberton-logo.jpg' \
  || ko 'App.jsx importe ./assets/holberton-logo.jpg'

grep -q 'alt="holberton logo"' src/App.jsx \
  && ok 'App.jsx utilise alt="holberton logo"' \
  || ko 'App.jsx utilise alt="holberton logo"'

# Footer EXACT attendu par task 8
grep -q " - holberton School" src/App.jsx && ! grep -qi "main dashboard" src/App.jsx \
  && ok 'Footer exact: "Copyright {year} - holberton School"' \
  || ko 'Footer exact: attendu " - holberton School" (pas "main dashboard")'

# 3) Notifications.jsx -> import image + alt
grep -Eq 'import\s+\w+\s+from\s+"\.\/assets\/close-button\.png"' src/Notifications.jsx \
  && ok 'Notifications.jsx importe ./assets/close-button.png' \
  || ko 'Notifications.jsx importe ./assets/close-button.png'

grep -q 'alt="close"' src/Notifications.jsx \
  && ok 'Notifications.jsx utilise alt="close"' \
  || ko 'Notifications.jsx utilise alt="close"'

# 3b) Pas d’anciens imports/nommage
! grep -R -q "\.\./" src \
  && ok "Aucun import relatif sortant (../) dans src/" \
  || ko "Aucun import relatif sortant (../) dans src/"

! grep -R -q "close-icon\.png" src \
  && ok "Aucune trace de close-icon.png dans src/" \
  || ko "Aucune trace de close-icon.png dans src/"

# 4) Vite configuré pour GH Pages
grep -q "base: '/holbertonschool-web_react/'" vite.config.js \
  && ok "vite.config.js -> base: '/holbertonschool-web_react/'" \
  || ko "vite.config.js -> base: '/holbertonschool-web_react/'"

# 5) package.json -> déploiement
grep -qi '"homepage"\s*:\s*"https://sdinahet.github.io/holbertonschool-web_react/?"' package.json \
  && ok "package.json -> homepage vers GitHub Pages" \
  || ko "package.json -> homepage vers GitHub Pages"

grep -q '"predeploy"\s*:\s*"npm run build"' package.json \
  && ok "package.json -> script predeploy = npm run build" \
  || ko "package.json -> script predeploy = npm run build"

grep -q '"deploy"\s*:\s*"gh-pages -d dist"' package.json \
  && ok "package.json -> script deploy = gh-pages -d dist" \
  || ko "package.json -> script deploy = gh-pages -d dist"

grep -Eq '"postbuild".+dist/index\.html.+dist/404\.html' package.json \
  && ok "package.json -> postbuild copie 404.html" \
  || ko "package.json -> postbuild copie 404.html"

# 6) Lien GH Pages
if [ -f holberton-dashboard.txt ]; then
  url=$(tr -d '[:space:]' < holberton-dashboard.txt)
  [ "$url" = "https://sdinahet.github.io/holbertonschool-web_react/" ] \
    && ok "14-holberton-dashboard.txt contient l'URL exacte" \
    || ko "15-holberton-dashboard.txt contient l'URL exacte (trouvé: $url)"
else
  ko "holberton-dashboard.txt existe"
fi

echo
if $pass; then
  echo "✅ Tous les checks locaux sont OK."
  echo "Ensuite : rm -rf dist node_modules/.vite && npm run build && npm run deploy"
else
  echo "❌ Il reste des NOK ci-dessus. Corrige-les puis relance."
fi
