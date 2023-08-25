const login = require("../controllers/loginControllers")

const loginHandlers = async (req, res) => {
    try { 
        const {email,password} = req.body 
        const response = await login(email,password)  
        return res.status(201).json(response);
     
    } catch (error) {
        res.status(500).json(error.message) 
    }
} 
module.exports = loginHandlers