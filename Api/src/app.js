const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const routes = require('./routes/index.js');
const morgan = require('morgan');
const cors = require('cors')

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'));
app.use(cors())

// routes
app.use('/', routes)

module.exports = app;