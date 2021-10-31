import { Router } from "express";
import { forgotPassword } from "./forgotPassword";
import { registerUser } from "./registerUser";

const routes = Router()

routes.post('/register', registerUser)
routes.post('/forgot-password', forgotPassword)

export default routes