import express from "express"
import { leaveinsert } from "./leavecontroller.js";

const leaveRouter = express.Router()

leaveRouter.post('/create', leaveinsert)


export default leaveRouter;