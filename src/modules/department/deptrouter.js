import express from "express"
import { insert,  list,  search,  update } from "./deptcontroller.js"

const departmentsRouter = express.Router()

departmentsRouter.get('/list/:limit/:offset', list)
departmentsRouter.post('/create', insert)
departmentsRouter.put('/edit', update)
departmentsRouter.post('/search', search)

export default departmentsRouter;
