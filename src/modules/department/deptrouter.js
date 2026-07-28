import express from "express"
import { insert,  update } from "./deptcontroller.js"

const departmentsRouter = express.Router()

// departmentsRouter.get('/list', list)
departmentsRouter.post('/create', insert)
departmentsRouter.put('/edit', update)
// departmentsRouter.put('/toggle-status/:deptIdCode', toggleStatus)

export default departmentsRouter;
