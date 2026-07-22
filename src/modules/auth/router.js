import express from "express"
import { signup } from "./controller.js";

const signRouter = express.Router()

signRouter.post('/insert', signup)

export default signRouter