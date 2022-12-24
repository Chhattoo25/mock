const { login, signup } =require("../controllers/authController")
const {Router} = require('express');

const AuthRouter = Router();
AuthRouter.post("/signup",signup );


AuthRouter.post("/login",login );


module.exports = {AuthRouter}