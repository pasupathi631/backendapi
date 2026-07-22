import express from "express"
import { connectDB } from "./config/db.js";
import signRouter from "./modules/auth/router.js";

const app = express() 

app.use(express.json());

await connectDB()


    app.use('/input', signRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

export default app;