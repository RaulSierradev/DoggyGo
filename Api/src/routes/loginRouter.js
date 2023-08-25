const express = require("express")

const loginHandlers = require("../handlers/loginHandlers")

const loginRouter = express.Router()

loginRouter.post("/", loginHandlers) 

module.exports = loginRouter