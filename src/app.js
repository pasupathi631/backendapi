import express from "express"
import { connectDB } from "./config/db.js";
import signRouter from "./modules/auth/router.js";
import employeeRouter from "./modules/employee/router.js";
import cors from "cors"
import departmentsRouter from "./modules/department/deptrouter.js";
import leaveRouter from "./modules/leavemanagement/leaverouter.js";


const app = express() 
app.use(cors({origin:"*"}))
app.use(express.json());

await connectDB()


    app.use('/auth', signRouter)
    app.use('/employee', employeeRouter)
    app.use('/department', departmentsRouter)
    app.use('/leave', leaveRouter)
    


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

export default app;