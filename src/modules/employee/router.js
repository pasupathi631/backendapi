
import express from "express"
import { filter, insert, report, search, update, view } from "./controller.js"

const employeeRouter = express.Router()


employeeRouter.post('/create', insert)
employeeRouter.get('/list/:limit/:offset', report)
employeeRouter.get('/get/:id', view)
employeeRouter.put('/edit', update)
employeeRouter.post('/search', search)
employeeRouter.post('/filter', filter)

export default employeeRouter;