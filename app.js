const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const authMiddleware = require('./middleware/auth');
const logMiddleware = require('./middleware/log');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Configure middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authMiddleware);
app.use(logMiddleware);

// Set up routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Set up error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});