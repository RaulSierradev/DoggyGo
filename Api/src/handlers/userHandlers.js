const { getUsersController, getUserByIdController, postUserController} = require('../controllers/userControllers')

//traer todos los walkers o traerlos por sus nombres
const getUsersHandler = async (req, res) => {
    const { name } = req.query
    try {
        const result = await getUsersController(name);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// traer walkers por id
const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getUserByIdController(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// crear walker
const postUserHandler = async (req, res) => {
    const { name, password, email, image, address, phone, description, status } = req.body;
    try {
        const postVideogame = await postUserController({ name, password, email, image, address, phone, description, status });
        res.status(200).json(postVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    getUsersHandler,
    getUserByIdHandler,
    postUserHandler,
}