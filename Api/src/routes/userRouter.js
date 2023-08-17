const { Router } = require('express');
const { getUsersHandler, getUserByIdHandler, postUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.get('/', getUsersHandler);                // Traer walkers 
userRouter.get('/:id', getUserByIdHandler);         // Traer walkers por su ID
userRouter.post('/', postUserHandler);              // Crear walker

module.exports = userRouter;