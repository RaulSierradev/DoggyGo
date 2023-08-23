const { Router } = require('express'); 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const userRouter = require ("./userRouter");
// const dogRouter = require ("./dogRouter");
// const walkRouter = require ("./walkRouter");
// const reviewRouter = require ("./reviewRouter");
// const locationRouter = require ("./locationRouter"); 
const loginRouter = require("./loginRouter") 


const router = Router();

// Configurar los routers


// router.use("/user", userRouter);
// router.use("/dog", dogRouter);
// router.use("/walk", walkRouter);
// router.use("/review", reviewRouter);
// router.use("/location", locationRouter); 
router.use("/login",loginRouter) 




module.exports = router