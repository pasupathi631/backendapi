import express from "express"
import { getLeaveList, leaveinsert, leaveStatusUpdate } from "./leavecontroller.js";

const leaveRouter = express.Router()

leaveRouter.post('/create', leaveinsert)
leaveRouter.get('/get-list', getLeaveList)
leaveRouter.put('/status', leaveStatusUpdate)


export default leaveRouter;