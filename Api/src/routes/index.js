const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require ("./userRouter");
const walkerRouter = require ("./walkerRouter");
 const dogRouter = require ("./dogRouter");
const walkRouter = require ("./walkRouter");
const reviewRouter = require ("./reviewRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", userRouter);
router.use("/walker", walkerRouter);
router.use("/dog", dogRouter);
router.use("/walk", walkRouter);
router.use("/review", reviewRouter);



module.exports = router