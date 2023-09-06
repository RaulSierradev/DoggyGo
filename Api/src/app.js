
require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index.js');
const passport = require('passport')
require('./handlers/authenticate.js');
const session = require('cookie-session')
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;
const path = require('path');





require('./db.js');

const server = express();

server.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: false }
}))

server.use(express.static(path.join(__dirname, '../../Client')));



server.name = 'API';

// Middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(passport.initialize())
server.use(passport.session())


// For Google Signup
server.get('/auth/google/signup', passport.authenticate('google', { scope: ['profile', 'email'] }));

// For Google Login
server.get('/auth/google/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

// For Google Callback
server.get('/auth/google/create', passport.authenticate('google', { failureRedirect: '/login' }), async (req, res) => {
  // user isComplete only when user is created manually or when user is created by google and then completed the form
  if (req.user.isComplete) {
    console.log('req user complete', req.user)
    let token = jwt.sign({ id: req.user.dataValues.id, rol: req.user.dataValues.rol }, JWT_SECRET_KEY, {
      expiresIn: 1 * 24 * 60 * 60 * 1000,
    });
    console.log('token', token)
    if (req.user.dataValues.rol === 'Client') {
      res.redirect(`${process.env.BASE_URL}/home?token=${token}`);
    } else if (req.user.dataValues.rol === 'Admin') {
      res.redirect(`${process.env.BASE_URL}/admin?token=${token}`);
    } else if (req.user.dataValues.rol === 'Walker') {
      res.redirect(`${process.env.BASE_URL}/dash?token=${token}`);
    }

  } else {

    res.redirect(`${process.env.BASE_URL}/registro?googleId=${req.user.id}&email=${req.user.emails[0].value}&name=${req.user.displayName}`);
  }

});


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Client', 'index.html'));
});


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
