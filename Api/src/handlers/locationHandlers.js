const { getCountriesController, getStatesController, getCitiesController} = require('../controllers/locationControllers')

//traer todos los walkers o traerlos por sus nombres
const getCountriesHandler = async (req, res) => {
    const { name } = req.query
    try {
        const result = await getCountriesController(name);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// traer walkers por id
const getStatesHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getStatesController(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// crear walker
const getCitiesHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getStatesController(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    getCountriesHandler,
    getStatesHandler,
    getCitiesHandler,
}