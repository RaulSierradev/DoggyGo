const express = require("express");
// middleware to check if all required fields are present in the request body
const db = require('../models');

const User = db.users;

const checkBody = (req, res, next) => {
    const body = req.body;

    if (!body.id || !body.userName || !body.email || !body.password || !body.user_type || !body.country) {
        return res.status(400).json({
            status: 'fail',
            message: 'missing data to create a User'
        })
    }
    next()
}



//Function to check if username or email already exist in the database
const checkUser = async (req, res, next) => {
    //search the database to see if user exist
    try {
        const username = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });
        //if username exist in the database respond with a status of 409
        if (username) {
            return res.json(409).send("username already taken");
        }

        //checking if email already exist
        const emailCheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        //if email exist in the database respond with a status of 409
        if (emailCheck) {
            return res.json(409).send("Authentication failed");
        }
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
};



module.exports = {
    checkBody,
    checkUser
}
