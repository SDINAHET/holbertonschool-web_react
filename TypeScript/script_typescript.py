import os

tasks = [
    {
        "name": "task_0",
        "files": [
            "package.json",
            ".eslintrc.js",
            "tsconfig.json",
            "webpack.config.js",
            "js/main.ts",
        ],
    },
    {
        "name": "task_1",
        "files": [
            "package.json",
            "tsconfig.json",
            "webpack.config.js",
            "js/main.ts",
        ],
    },
    {
        "name": "task_2",
        "files": [
            "package.json",
            "tsconfig.json",
            "webpack.config.js",
            "js/main.ts",
        ],
    },
    {
        "name": "task_3",
        "files": [
            "package.json",
            "tsconfig.json",
            "webpack.config.js",
            "js/main.ts",
            "js/interface.ts",
            "js/crud.d.ts",
        ],
    },
    {
        "name": "task_4",
        "files": [
            "package.json",
            "tsconfig.json",
            "js/subjects/Cpp.ts",
            "js/subjects/Java.ts",
            "js/subjects/React.ts",
            "js/subjects/Subject.ts",
            "js/subjects/Teacher.ts",
        ],
    },
    {
        "name": "task_5",
        "files": [
            "package.json",
            "tsconfig.json",
            "webpack.config.js",
            "js/main.ts",
        ],
    },
]


def create_directories_and_files():
    for task in tasks:
        task_dir = task["name"]
        for file in task["files"]:
            file_path = os.path.join(task_dir, file)
            dir_name = os.path.dirname(file_path)

            # Create directories if they don't exist
            if not os.path.exists(dir_name):
                os.makedirs(dir_name)

            # Create empty files
            with open(file_path, "w") as f:
                pass

    print("All files and directories created successfully!")


if __name__ == "__main__":
    create_directories_and_files()
