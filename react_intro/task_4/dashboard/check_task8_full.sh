#!/usr/bin/env bash
# Task 8 full checker (run from: react_intro/task_4/dashboard)
# Sections:
#  [0] Link & deployment config
#  [1] Assets & paths
#  [2] Visual layout (lists, colors, footer, login)

set +euo pipefail

SECTION=0
TEST_INDEX=0
PASS_GLOBAL=true

# Colors (fallback if tput not available)
green='\033[0;32m'; red='\033[0;31m'; yellow='\033[1;33m'; blue='\033[0;34m'; nc='\033[0m'
if ! command -v tput >/dev/null 2>&1; then green=''; red=''; yellow=''; blue=''; nc=''; fi

hr() { printf "${blue}%s${nc}\n" "----------------------------------------------------------------------"; }
title() {
  echo
  hr
  printf "${yellow}[%d] %s${nc}\n" "$SECTION" "$1"
  hr
}

ok() {
  printf " [%02d] ${green}OK${nc}  - %s\n" "$TEST_INDEX" "$1"
  TEST_INDEX=$((TEST_INDEX+1))
}

ko() {
  printf " [%02d] ${red}NOK${nc} - %s\n" "$TEST_INDEX" "$1"
  TEST_INDEX=$((TEST_INDEX+1))
  PASS_GLOBAL=false
}

# tiny helpers
have() { [ -e "$1" ]; }
grepx() { grep -E "$1" "$2" >/dev/null 2>&1; }
grepqi() { grep -Ei "$1" "$2" >/dev/null 2>&1; }
file_contains_exact_url() {
  local url expected
  expected="$1"
  if [ ! -f "$2" ]; then return 1; fi
  url="$(tr -d '[:space:]' < "$2")"
  [ "$url" = "$expected" ]
}

# Resolve root dir (must be run from task_4/dashboard)
ROOT="."
SRC="$ROOT/src"

# ---------------------------------------------------------------------
title "Link & deployment config"

EXPECTED_URL="https://sdinahet.github.io/holbertonschool-web_react/"
FOUND_LINK_FILE=""
if have "$ROOT/holberton-dashboard.txt"; then
  FOUND_LINK_FILE="$ROOT/holberton-dashboard.txt"
elif have "$ROOT/14-holberton-dashboard.txt"; then
  FOUND_LINK_FILE="$ROOT/14-holberton-dashboard.txt"
fi

if [ -n "$FOUND_LINK_FILE" ] && file_contains_exact_url "$EXPECTED_URL" "$FOUND_LINK_FILE"; then
  ok "holberton-dashboard.txt present with exact URL ($FOUND_LINK_FILE)"
else
  ko "holberton-dashboard.txt missing or URL not exact (must be: $EXPECTED_URL)"
fi

if have "$ROOT/vite.config.js"; then
  if grepx "base:[[:space:]]*'/holbertonschool-web_react/'" "$ROOT/vite.config.js"; then
    ok "vite.config.js base is '/holbertonschool-web_react/'"
  else
    ko "vite.config.js base should be '/holbertonschool-web_react/'"
  fi
else
  ko "vite.config.js not found"
fi

if have "$ROOT/package.json"; then
  if grepqi '"homepage"[[:space:]]*:[[:space:]]*"https://sdinahet.github.io/holbertonschool-web_react/?\"' "$ROOT/package.json"; then
    ok "package.json has correct homepage"
  else
    ko "package.json missing/incorrect homepage"
  fi
  if grepx '"predeploy"[[:space:]]*:[[:space:]]*"npm run build"' "$ROOT/package.json"; then
    ok "package.json has predeploy script"
  else
    ko "package.json missing predeploy script"
  fi
  if grepx '"deploy"[[:space:]]*:[[:space:]]*"gh-pages -d dist"' "$ROOT/package.json"; then
    ok "package.json has deploy script"
  else
    ko "package.json missing deploy script"
  fi
  if grep -E '"postbuild".+dist/index\.html.+dist/404\.html' "$ROOT/package.json" >/dev/null 2>&1; then
    ok "package.json copies 404.html on postbuild"
  else
    ko "package.json missing postbuild copy of 404.html"
  fi
else
  ko "package.json not found"
fi

# ---------------------------------------------------------------------
SECTION=$((SECTION+1))
title "Assets & paths"

if have "$ROOT/public/favicon.ico"; then ok "public/favicon.ico exists"; else ko "public/favicon.ico missing"; fi
if have "$SRC/assets/holberton-logo.jpg"; then ok "src/assets/holberton-logo.jpg exists"; else ko "src/assets/holberton-logo.jpg missing"; fi
if have "$SRC/assets/close-button.png"; then ok "src/assets/close-button.png exists"; else ko "src/assets/close-button.png missing"; fi

if have "$ROOT/index.html"; then
  if grepx '<link[^>]+rel="icon"[^>]+href="favicon\.ico"' "$ROOT/index.html"; then
    ok "index.html has <link rel=\"icon\" href=\"favicon.ico\">"
  else
    ko "index.html should have <link rel=\"icon\" href=\"favicon.ico\">"
  fi
else
  ko "index.html not found at project root"
fi

# imports: allow any identifier name, but exact path
if have "$SRC/App.jsx"; then
  if grepx 'from[[:space:]]+"\.\/assets\/holberton-logo\.jpg"' "$SRC/App.jsx"; then
    ok "App.jsx imports ./assets/holberton-logo.jpg"
  else
    ko "App.jsx should import ./assets/holberton-logo.jpg"
  fi
  if grep -q 'alt="holberton logo"' "$SRC/App.jsx"; then
    ok 'App.jsx uses alt="holberton logo"'
  else
    ko 'App.jsx must use alt="holberton logo"'
  fi
else
  ko "src/App.jsx not found"
fi

if have "$SRC/Notifications.jsx"; then
  if grepx 'from[[:space:]]+"\.\/assets\/close-button\.png"' "$SRC/Notifications.jsx"; then
    ok "Notifications.jsx imports ./assets/close-button.png"
  else
    ko "Notifications.jsx should import ./assets/close-button.png"
  fi
  if grep -q 'alt="close"' "$SRC/Notifications.jsx"; then
    ok 'Notifications.jsx uses alt="close"'
  else
    ko 'Notifications.jsx must use alt="close"'
  fi
else
  ko "src/Notifications.jsx not found"
fi

# ensure no ../ imports remain anywhere in src (even in comments often break checkers)
if grep -R -n '\.\./' "$SRC" >/dev/null 2>&1; then
  ko "There are '../' imports in src/ (remove all, even in commented code)"
else
  ok "No '../' imports in src/"
fi

# ensure no 'close-icon.png' references remain
if grep -R -n 'close-icon\.png' "$SRC" >/dev/null 2>&1; then
  ko "Found references to close-icon.png (must be close-button.png)"
else
  ok "No references to close-icon.png"
fi

# ---------------------------------------------------------------------
SECTION=$((SECTION+1))
title "Visual layout: notifications, login, footer"

# Footer exact (and ensure 'main dashboard' is not used)
if have "$SRC/App.jsx"; then
  if grep -q " - holberton School" "$SRC/App.jsx" && ! grep -qi "main dashboard" "$SRC/App.jsx"; then
    ok 'Footer exact: "Copyright {year} - holberton School"'
  else
    ko 'Footer must be EXACT: Copyright {getCurrentYear()} - holberton School (and not "main dashboard")'
  fi
fi

# Login form basics
if have "$SRC/App.jsx"; then
  grepqi 'label[^>]*for="email"|htmlFor="email"' "$SRC/App.jsx" && grepqi 'type="email"' "$SRC/App.jsx" \
    && ok "Login form has email label + input" || ko "Login form missing email label or input"
  grepqi 'label[^>]*for="password"|htmlFor="password"' "$SRC/App.jsx" && grepqi 'type="password"' "$SRC/App.jsx" \
    && ok "Login form has password label + input" || ko "Login form missing password label or input"
  grepqi '>\s*OK\s*<' "$SRC/App.jsx" && ok "Login form has OK button" || ko "Login form missing OK button"
fi

# Notifications list: 3 items, 1 default (blue), 2 urgent (red)
if have "$SRC/Notifications.jsx"; then
  # Try to strip JSX block comments { /* ... */ } coarsely before counting <li>.
  CLEANED="$(sed -e 's#/\*.*\*/##g' "$SRC/Notifications.jsx" | sed -e 's#{/\*##g' -e 's#\*/}##g')"
  LI_COUNT="$(printf "%s" "$CLEANED" | grep -o '<li\b' | wc -l | tr -d ' ')"
  if [ "$LI_COUNT" -eq 3 ]; then
    ok "Notifications has exactly 3 <li>"
  else
    ko "Notifications should have exactly 3 <li> (found $LI_COUNT)"
  fi

  # Count default/urgent using either attribute variant
  DEF_COUNT="$(printf "%s" "$CLEANED" | grep -E '<li[^>]+(data-priority|data-notification-type)="default"' -o | wc -l | tr -d ' ')"
  URG_COUNT="$(printf "%s" "$CLEANED" | grep -E '<li[^>]+(data-priority|data-notification-type)="urgent"' -o | wc -l | tr -d ' ')"
  if [ "$DEF_COUNT" -ge 1 ]; then ok "At least 1 default notification item"; else ko "Missing default notification item"; fi
  if [ "$URG_COUNT" -ge 2 ]; then ok "At least 2 urgent notification items"; else ko "Need 2 urgent notification items"; fi
fi

# Notification colors in CSS (blue for default, red for urgent) using either attribute
if have "$SRC/Notifications.css"; then
  if grep -E 'data-(priority|notification-type)="default".*{[^}]*color:[[:space:]]*blue' -z "$SRC/Notifications.css" >/dev/null 2>&1 \
     || grep -E 'data-(priority|notification-type)="default"' "$SRC/Notifications.css" >/dev/null 2>&1 && grep -Ei 'default[^}]*color:[[:space:]]*blue' "$SRC/Notifications.css" >/dev/null 2>&1; then
    ok "CSS colors default -> blue"
  else
    ko "CSS must color default notifications blue"
  fi
  if grep -E 'data-(priority|notification-type)="urgent".*{[^}]*color:[[:space:]]*red' -z "$SRC/Notifications.css" >/dev/null 2>&1 \
     || grep -E 'data-(priority|notification-type)="urgent"' "$SRC/Notifications.css" >/dev/null 2>&1 && grep -Ei 'urgent[^}]*color:[[:space:]]*red' "$SRC/Notifications.css" >/dev/null 2>&1; then
    ok "CSS colors urgent -> red"
  else
    ko "CSS must color urgent notifications red"
  fi
else
  ko "src/Notifications.css not found"
fi

echo
hr
if $PASS_GLOBAL; then
  printf "${green}All checks passed. You can now: npm run build && npm run deploy${nc}\n"
  exit 0
else
  printf "${red}Some checks failed. Fix the NOK items and rerun.${nc}\n"
  exit 1
fi
