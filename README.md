<h1>Structure Overview</h1>

| File/Directory    | Purpose |
|-------------------|---------|
| app.js            | main server code |
| routes/           | routing code |
| routes/index.js   | routes for the home page |
| routes/users.js   | routes for user management |
| middleware/       | other middleware code |
| middleware/auth.js| authentication middleware |
| middleware/log.js | logging middleware |
| dao/              | data access object code |
| dao/db.js         | code for interacting with the database (SQLite3) |
| api/              | code for making external API calls |
| api/weather.js    | code for getting weather data |
| public/           | public assets |
| public/css/       | CSS files |
| public/js/        | JavaScript files |
| public/img/       | image files |
| views/            | views/layouts code |
| views/layouts/    | handlebars layouts |
| views/pages/      | handlebars templates for individual pages |



<h1>Helper NPM Packages</h1>


| Package Name | Short Description | Link to Detail Use Example | YouTube Tutorial | Official Documentation |
|--------------|-------------------|-----------------------------|------------------|------------------------|
| bcrypt       | A library for hashing and salting user passwords | https://www.npmjs.com/package/bcrypt#usage | https://www.youtube.com/watch?v=O6cmuiTBZVs | https://www.npmjs.com/package/bcrypt |
| body-parser  | A middleware for parsing request bodies | https://www.npmjs.com/package/body-parser#bodyparserjsonoptions | https://www.youtube.com/watch?v=1FJDbfm-B9U | https://www.npmjs.com/package/body-parser |
| debug        | A small debugging utility | https://www.npmjs.com/package/debug#usage | https://www.youtube.com/watch?v=nM5grYG5f8c | https://www.npmjs.com/package/debug |
| dotenv       | A zero-dependency module that loads environment variables from a .env file | https://www.npmjs.com/package/dotenv#usage | https://www.youtube.com/watch?v=Q1DV5ZpCd-E | https://www.npmjs.com/package/dotenv |
| eslint       | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code | https://www.npmjs.com/package/eslint#cli-commands | https://www.youtube.com/watch?v=XuFDcZABiDQ | https://www.npmjs.com/package/eslint |
| express      | A fast, minimalist web framework for Node.js | https://www.npmjs.com/package/express#getting-started | https://www.youtube.com/watch?v=L72fhGm1tfE | https://www.npmjs.com/package/express |
| joi          | An object schema validation library | https://www.npmjs.com/package/joi#validating-values | https://www.youtube.com/watch?v=FCMvD_jR1d8 | https://www.npmjs.com/package/joi |
| jsonwebtoken | An implementation of JSON Web Tokens | https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback | https://www.youtube.com/watch?v=7nafaH9SddU | https://www.npmjs.com/package/jsonwebtoken |
| morgan       | A middleware for logging HTTP requests | https://www.npmjs.com/package/morgan#basic-use | https://www.youtube.com/watch?v=eB9Fq9I5ocs | https://www.npmjs.com/package/morgan |
| nodemon      | A tool that automatically restarts your Node.js application when it detects changes in your source code | https://www.npmjs.com/package/nodemon#nodemon-1 | https://www.youtube.com/watch?v=rUzT2HkO7eA | https://www.npmjs.com/package/nodemon |
| react        | A JavaScript library for building user interfaces | https://reactjs.org/docs/getting-started.html | https://www.youtube.com/watch?v=Ke90Tje7VS0 | https://reactjs.org/docs/getting-started.html |
| react-native | A framework for building native apps with React | https://reactnative.dev/docs/getting-started |  | https://reactnative.dev/docs/getting-started |
| save         | A module for serializing and saving JavaScript objects to files | https://www.npmjs.com/package/save#savejson-filename-options-callback |  | https://www.npmjs.com/package/save |
| sqlite3      | A SQLite3 driver for Node.js | https://www.npmjs.com/package/sqlite3#opening-a-database |  | https://www.npmjs.com/package/sqlite3 |



Step | Description | Required npm Packages
-----|-------------|-----------------------
1 | Set up development environment | Node.js, code editor
2 | Install necessary npm packages | express, body-parser, morgan, debug, dotenv, joi, jsonwebtoken, bcrypt, sqlite3, request or axios, handlebars, nodemon, eslint
3 | Set up project structure | app.js, routes/index.js, routes/users.js, middleware/auth.js, middleware/log.js, dao/db.js, api/weather.js, public/css/, public/js/, public/img/, views/layouts/, views/pages/
4 | Set up main server code in app.js | express, body-parser, morgan, dotenv, route files
5 | Set up routing code in route files | index.js, users.js
6 | Set up custom middleware in middleware files | auth.js, log.js
7 | Set up data access object code in db.js | sqlite3
8 | Set up code for making external API calls in weather.js | request or axios
9 | Set up views and layouts in views directory | handlebars, express app's `render` method
10 | Set up public assets in public directory | CSS, JavaScript, image files
11 | Test and debug app | nodemon, debug, eslint
12 | Deploy app | hosting platform, environment variables
