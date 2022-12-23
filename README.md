my-app/
├── app.js          # main server code
├── routes/         # routing code
│   ├── index.js    # routes for the home page
│   └── users.js    # routes for user management
├── middleware/     # other middleware code
│   ├── auth.js     # authentication middleware
│   └── log.js      # logging middleware
├── dao/            # data access object code
│   └── db.js       # code for interacting with the database (SQLite3)
├── api/            # code for making external API calls
│   └── weather.js  # code for getting weather data
├── public/         # public assets
│   ├── css/        # CSS files
│   ├── js/         # JavaScript files
│   └── img/        # image files
└── views/          # views/layouts code
    ├── layouts/    # handlebars layouts
    └── pages/      # handlebars templates for individual pages
