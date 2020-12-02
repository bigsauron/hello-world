const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const SETTINGS = require('./settings');

module.exports = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', 'dist');

  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
  app.use(bodyParser.json({ limit: '50mb' }));

  // express session middleware setup
  app.use(session({
    secret: SETTINGS.SECRET,
    resave: false,
    saveUninitialized: false
  }));

  const cacheTime = 2592000000;

  app.use(express.static('dist', {
    maxAge: cacheTime,
  }));

  app.use('/assets', express.static('assets', {
    maxAge: cacheTime,
  }));

  const routes = require('./routes');
  app.use('/api', routes);

  app.get('*', async (req, res) => {
    res.render('index', {
    });
  });

  app.listen(SETTINGS.PORT, () => {
    console.log(`App prod listening to ${SETTINGS.PORT}....`); // eslint-disable-line no-console
    console.log('Press Ctrl+C to quit.'); // eslint-disable-line no-console
  });
};
