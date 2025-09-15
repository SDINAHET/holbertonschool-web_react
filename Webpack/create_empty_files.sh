#!/usr/bin/env bash
set -euo pipefail

# Liste des fichiers à créer (vides)
files=(
  "task_1/js/dashboard_main.js"
  "task_1/package.json"
  "task_1/webpack.config.js"
  "task_1/public/index.html"

  "task_2/package.json"
  "task_2/css/main.css"
  "task_2/webpack.config.js"
  "task_2/js/dashboard_main.js"
  "task_2/public/index.html"

  "task_3/modules/body/body.css"
  "task_3/modules/body/body.js"
  "task_3/modules/footer/footer.css"
  "task_3/modules/footer/footer.js"
  "task_3/modules/header/header.css"
  "task_3/modules/header/header.js"
  "task_3/package.json"
  "task_3/webpack.config.js"
)

create_empty_file () {
  local path="$1"
  mkdir -p "$(dirname "$path")"   # crée les dossiers parents si besoin
  # crée le fichier s'il n'existe pas, ou le vide s'il existe déjà
  : > "$path"
  echo "✓ $path"
}

for f in "${files[@]}"; do
  create_empty_file "$f"
done

echo "Tous les fichiers vides ont été créés."
