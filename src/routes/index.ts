import { Router } from "express";
import { forgotPassword } from "./forgotPassword";
import { registerUser } from "./registerUser";

const routes = Router()

routes.post('/register', registerUser)

export default routes