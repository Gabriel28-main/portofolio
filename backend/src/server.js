import express from "express";
import dotenv from "dotenv";

import profileRouter from "./routes/profileRouter.js";
import projectRouter from "./routes/projectRouter.js";
import skillRouter from "./routes/skillRouter.js";
import experienceRouter from "./routes/experienceRouter.js";
import contactRouter from "./routes/contactRouter.js";
import certificateRouter from "./routes/certificateRouter.js";
import testimoniRouter from "./routes/testimoniRouter.js";
import resumeRouter from "./routes/resumeRouter.js";
import authRouter from "./routes/authRouter.js"
const app = express()
dotenv.config()



const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/profile', profileRouter)
app.use('/api/project', projectRouter)
app.use('/api/skill', skillRouter)
app.use('/api/experience', experienceRouter)
app.use('/api/contact', contactRouter)
app.use('/api/certificate', certificateRouter)
app.use('/api/testimoni', testimoniRouter)
app.use('/api/resume', resumeRouter)
app.use('/api/auth', authRouter)


app.listen(port, () => {
    console.log(`berjalan di http://localhost:${port}`)
})