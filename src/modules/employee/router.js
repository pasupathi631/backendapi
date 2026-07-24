
import express from "express"
import { insert, report, update, view } from "./controller.js"

const employeeRouter = express.Router()

employeeRouter.post('/create', insert)
employeeRouter.get('/list', report)
employeeRouter.get('/get/:id', view)
employeeRouter.put('/edit/:id', update)

export default employeeRouter;