# react_component

# Task0
```bash
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_component
/task_0/dashboard# npm run build

> dashboard@0.0.0 build
> vite build

vite v5.4.20 building for production...
✓ 52 modules transformed.
dist/index.html                            0.59 kB │ gzip:  0.35 kB
dist/assets/holberton-logo-CIW0R4GT.jpg   23.64 kB
dist/assets/index-B8KTArxz.css             2.15 kB │ gzip:  0.82 kB
dist/assets/index-3z51f1gz.js            150.34 kB │ gzip: 50.19 kB
✓ built in 2.80s

> dashboard@0.0.0 postbuild
> cp dist/index.html dist/404.html || copy dist\index.html dist\404.html

root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_component
/task_0/dashboard# npm run lint

> dashboard@0.0.0 lint
> eslint -c eslint.config.js "src/**/*.{js,jsx}"

root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_component
/task_0/dashboard# npm run dev

> dashboard@0.0.0 dev
> vite


  VITE v5.4.20  ready in 1634 ms

  ➜  Local:   http://localhost:5173/holbertonschool-web_react/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_component
/task_0/dashboard# npm run test

> dashboard@0.0.0 test
> jest --watchAll=false

 PASS  src/utils/utils.spec.js (40.708 s)
 PASS  src/Notifications/NotificationItem.spec.js (52.565 s)
 PASS  src/App/App.spec.js (54.197 s)
 PASS  src/CourseList/CourseList.spec.js (56.238 s)
 PASS  src/Notifications/Notifications.spec.js (59.345 s)
  ● Console

    console.log
      Close button has been clicked

      at console.<anonymous> (node_modules/jest-mock/build/index.js:794:25)

 PASS  ./test-app-component.spec.js (56.801 s)
 PASS  src/Header/Header.spec.js (10.473 s)
 PASS  src/favicon.spec.js (6.823 s)
 PASS  src/staticAssets.spec.js (12.159 s)
 PASS  src/Login/Login.spec.js (26.58 s)
 PASS  src/Footer/Footer.spec.js (11.211 s)
 PASS  src/CourseList/CourseListRow.spec.js (79.847 s)

Test Suites: 12 passed, 12 total
Tests:       37 passed, 37 total
Snapshots:   0 total
Time:        125.322 s
Ran all test suites.

```

# Task1

```bash

```

# Task2
````bash
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_com
ponent/task_2/dashboard# npm run build

> dashboard@0.0.0 build
> vite build

vite v5.4.20 building for production...
✓ 52 modules transformed.
dist/index.html                            0.59 kB │ gzip:  0.35 kB
dist/assets/holberton-logo-CIW0R4GT.jpg   23.64 kB
dist/assets/index-B8KTArxz.css             2.15 kB │ gzip:  0.82 kB
dist/assets/index-a5hI8TA5.js            151.28 kB │ gzip: 50.49 kB
✓ built in 1.69s

> dashboard@0.0.0 postbuild
> cp dist/index.html dist/404.html || copy dist\index.html dist\404.html

root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_com
ponent/task_2/dashboard# npm run test

> dashboard@0.0.0 test
> jest --watchAll=false

 PASS  src/utils/utils.spec.js (17.729 s)
 PASS  src/Login/Login.spec.js (43.174 s)
 PASS  src/CourseList/CourseList.spec.js (50.077 s)
 PASS  src/App/App.spec.js (50.527 s)
 PASS  ./test-app-component.spec.js (51.251 s)
 PASS  src/favicon.spec.js
 PASS  src/staticAssets.spec.js
 PASS  src/Footer/Footer.spec.js
 PASS  src/Notifications/NotificationItem.spec.js
 PASS  src/Header/Header.spec.js (29.43 s)
 PASS  src/Notifications/Notifications.spec.js (47.635 s)
 PASS  src/CourseList/CourseListRow.spec.js (62.54 s)

Test Suites: 12 passed, 12 total
Tests:       41 passed, 41 total
Snapshots:   0 total
Time:        83.274 s
Ran all test suites.
```

# Task4

```bash
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_com
ponent/task_3/dashboard# npm run build

> dashboard@0.0.0 build
> vite build

vite v5.4.20 building for production...
✓ 52 modules transformed.
dist/index.html                            0.59 kB │ gzip:  0.35 kB
dist/assets/holberton-logo-CIW0R4GT.jpg   23.64 kB
dist/assets/index-B8KTArxz.css             2.15 kB │ gzip:  0.82 kB
dist/assets/index-a5hI8TA5.js            151.28 kB │ gzip: 50.49 kB
✓ built in 1.47s

> dashboard@0.0.0 postbuild
> cp dist/index.html dist/404.html || copy dist\index.html dist\404.html

root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_com
ponent/task_3/dashboard# npm run test

> dashboard@0.0.0 test
> jest --watchAll=false

 PASS  src/BodySection/BodySectionWithMarginBottom.spec.js (22.399 s)
 PASS  src/Notifications/Notifications.spec.js (23.043 s)
 PASS  src/utils/utils.spec.js
 PASS  src/CourseList/CourseListRow.spec.js (38.404 s)
 PASS  ./test-app-component.spec.js (28.709 s)
 PASS  src/BodySection/BodySection.spec.js
 PASS  src/Login/Login.spec.js (6.96 s)
 PASS  src/Header/Header.spec.js (6.099 s)
 PASS  src/favicon.spec.js
 PASS  src/staticAssets.spec.js (6.105 s)
 PASS  src/Footer/Footer.spec.js
 PASS  src/App/App.spec.js (38.898 s)
 PASS  src/Notifications/NotificationItem.spec.js (38.168 s)
 PASS  src/CourseList/CourseList.spec.js (40.805 s)

Test Suites: 14 passed, 14 total
Tests:       45 passed, 45 total
Snapshots:   0 total
Time:        56.344 s
Ran all test suites.
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/react_com
ponent/task_3/dashboard# npm run dev

> dashboard@0.0.0 dev
> vite


  VITE v5.4.20  ready in 1070 ms

  ➜  Local:   http://localhost:5173/holbertonschool-web_react/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

# Task5

```bash

```

# Task6

```bash

```

# Task7

```bash

```
