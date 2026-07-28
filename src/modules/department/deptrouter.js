import express from "express"
import { insert,  list,  update } from "./deptcontroller.js"

const departmentsRouter = express.Router()

departmentsRouter.get('/list/:limit/:offset', list)
departmentsRouter.post('/create', insert)
departmentsRouter.put('/edit', update)
// departmentsRouter.put('/toggle-status/:deptIdCode', toggleStatus)

export default departmentsRouter;
