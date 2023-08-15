// signup: creates a new User by hashing the password with bcrypt before it’s saved in the database
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

// Assigning users to the variable User
const User = db.users;

const signup = async (req, res) => {
    const { userName, email, password, country, city } = req.body
    try {

        const data = {
            userName,
            email,
            password: await bcrypt.hash(password, 10),
            country,
            city: city || null,
        }

        // save user in the database
        const user = await User.create(data);

        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (user) {
            let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            console.log("user", JSON.stringify(user, null, 2));
            console.log(token);
            //send users details
            return res.status(201).send(user);
        }
        else {
            return res.status(400).send("Error creating user");
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error creating user");
    }
}

module.exports = signup;