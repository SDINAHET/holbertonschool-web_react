import os
import subprocess
import json

# Chemins et fichiers à vérifier
task_0_dir = "task_0"
required_files = [
    "package.json",
    ".eslintrc.js",
    "tsconfig.json",
    "webpack.config.js",
    "js/main.ts",
]

# Vérification de l'existence des fichiers
def check_files_exist():
    print("🔍 Vérification des fichiers requis...")
    all_files_exist = True
    for file in required_files:
        file_path = os.path.join(task_0_dir, file)
        if not os.path.exists(file_path):
            print(f"❌ Fichier manquant : {file}")
            all_files_exist = False
        else:
            print(f"✅ Fichier présent : {file}")
    return all_files_exist

# Vérification du contenu de package.json
def check_package_json():
    print("\n🔍 Vérification de package.json...")
    package_path = os.path.join(task_0_dir, "package.json")
    if not os.path.exists(package_path):
        print("❌ Fichier package.json introuvable.")
        return False

    with open(package_path, "r") as f:
        package_content = json.load(f)

    required_scripts = {
        "start-dev": "webpack-dev-server --open",
        "build": "webpack",
        "test": "jest",
    }

    for script, command in required_scripts.items():
        if script not in package_content.get("scripts", {}) or package_content["scripts"][script] != command:
            print(f"❌ Script manquant ou incorrect : {script}")
            return False
        else:
            print(f"✅ Script valide : {script}")
    return True

# Exécution des commandes de test
def run_tests():
    print("\n🔍 Test de compilation et d'exécution...")
    try:
        subprocess.run(["npm", "install"], cwd=task_0_dir, check=True)
        subprocess.run(["npm", "run", "build"], cwd=task_0_dir, check=True)
        print("✅ Compilation réussie avec npm run build.")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Erreur lors de l'exécution : {e}")
        return False

# Vérification du fichier main.ts
def check_main_ts():
    print("\n🔍 Vérification de js/main.ts...")
    main_ts_path = os.path.join(task_0_dir, "js/main.ts")
    if not os.path.exists(main_ts_path):
        print("❌ Fichier js/main.ts introuvable.")
        return False

    with open(main_ts_path, "r") as f:
        content = f.read()

    required_keywords = [
        "interface Student", "studentsList", "document.createElement", "appendChild"
    ]

    all_keywords_present = True
    for keyword in required_keywords:
        if keyword not in content:
            print(f"❌ Mot-clé manquant : {keyword}")
            all_keywords_present = False
        else:
            print(f"✅ Mot-clé trouvé : {keyword}")
    return all_keywords_present

# Fonction principale du checker
def main():
    print("🚀 Lancement du checker pour task_0...\n")
    files_ok = check_files_exist()
    package_ok = check_package_json()
    main_ts_ok = check_main_ts()
    tests_ok = run_tests()

    if files_ok and package_ok and main_ts_ok and tests_ok:
        print("\n🎉 Tous les tests ont été validés avec succès !")
    else:
        print("\n❌ Certains tests ont échoué. Veuillez corriger les erreurs et réessayer.")

if __name__ == "__main__":
    main()
