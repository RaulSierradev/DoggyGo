const { Router } = require('express');
const { getCountriesHandler, getStatesHandler, getCitiesHandler } = require('../handlers/locationHandlers');

const locationRouter = Router();

locationRouter.get('/country', getCountriesHandler);                // Traer walkers 
locationRouter.get('/state', getStatesHandler);              // Traer walkers por su ID
locationRouter.get('/city', getCitiesHandler);                 // Crear walker

module.exports = locationRouter;