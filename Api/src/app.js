const express = require('express'); 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index.js');  
const passport = require('passport')


require('./db.js');

const server = express();      




server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));    
server.use(express.json()) 
server.use(express.urlencoded({ extended: false}))
server.use(passport.initialize())   

require('./authenticate.js');


server.get('/google', passport.authenticate('google',{ scope: ['profile', 'email'] })); 
server.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login'}), (req, res) =>{
  // res.redirect('/') 
  res.end('logget in!')
})



server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', router);   



// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
