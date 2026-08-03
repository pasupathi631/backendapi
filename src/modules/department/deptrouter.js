import express from "express"
import { deptnamesearch, insert,  list,  search,  update } from "./deptcontroller.js"

const departmentsRouter = express.Router()

departmentsRouter.get('/list/:limit/:offset', list)
departmentsRouter.post('/create', insert)
departmentsRouter.put('/edit', update)
departmentsRouter.post('/search', search)
departmentsRouter.post('/deptnamesearch', deptnamesearch)

export default departmentsRouter;
