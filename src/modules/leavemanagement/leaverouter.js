import express from "express"
import { getDashboardCards, getLeaveList, leaveinsert, leaveStatusUpdate, getLeaveAllowance} from "./leavecontroller.js";

const leaveRouter = express.Router()

leaveRouter.post('/create', leaveinsert)
leaveRouter.get('/get-list', getLeaveList)
leaveRouter.put('/status', leaveStatusUpdate)
leaveRouter.get("/dashboard", getDashboardCards)
leaveRouter.get("/leave-allowance/:emp_id", getLeaveAllowance);

export default leaveRouter;