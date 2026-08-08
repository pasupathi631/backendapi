import express from "express"
import { createAttendance } from "./attendancecontroller.js";


const attendRouter = express.Router()

attendRouter.post('/insert', createAttendance);

export default attendRouter;