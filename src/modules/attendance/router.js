import express from "express"
import { AttendanceStatistics } from "./attendancecontroller.js";


const attendRouter = express.Router()

attendRouter.get('/statistics', AttendanceStatistics);

export default attendRouter;