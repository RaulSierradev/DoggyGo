const { Router } = require('express');
const { getUsersHandler, getUserByIdHandler, postUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.get('/', getUsersHandler);                 
userRouter.get('/:id', getUserByIdHandler);         
userRouter.post('/', postUserHandler);              

module.exports = userRouter;

