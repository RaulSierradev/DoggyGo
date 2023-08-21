const { getUsersByNameController, getUsersController, getUserByIdController, postUserController, putUserController} = require('../controllers/userControllers')

//traer todos los users o traerlos por sus nombres
const getUsersHandler = async (req, res) => {
    try {
        const result = await getUsersController();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//traer todos los users o traerlos por sus nombres
const getUsersByNameHandler = async (req, res) => {
    try {
        const { name } = req.params;

        const result = await getUsersByNameController(name);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// traer user por id
const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getUserByIdController(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// crear user
const postUserHandler = async (req, res) => {
    const { name, email, password, description, birthdate, image, country, state, city, address, phone,  status, suscription, rol } = req.body;
    try {
        const postUser = await postUserController({ name, email, password, description, birthdate, image, country, state, city, address, phone,  status, suscription, rol });
        res.status(200).json(postUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//editar user
const putUserHandler = async (req, res) => {
    const { name, email, password, description, birthdate, image, country, state, city, address, phone,  status, suscription, rol } = req.body;
    try {
        const postUser = await putUserController({ name, email, password, description, birthdate, image, country, state, city, address, phone,  status, suscription, rol });
        res.status(200).json(postUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    getUsersByNameHandler,
    getUsersHandler,
    getUserByIdHandler,
    postUserHandler,
    putUserHandler
}

