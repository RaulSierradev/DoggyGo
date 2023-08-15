const { Router } = require('express');
const router = Router();

const { test } = require('../controllers/testController');
const { checkBody, checkUser } = require('../controllers/userCreation');
const signup = require('../controllers/userController');

router
    .route('/')
    .get(test)

router
    .route('/create')
    .post(checkBody, checkUser, signup)


module.exports = router;