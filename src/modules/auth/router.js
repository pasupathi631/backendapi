import express from "express"
import { login, signup } from "./controller.js";


const signRouter = express.Router()

signRouter.post('/insert', signup)
signRouter.post('/login', login)

export default signRouter