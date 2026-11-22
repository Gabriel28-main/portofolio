<<<<<<< HEAD
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

=======
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import profileRouter from './routes/profileRouter.js'
import projectRouter from './routes/projectRouter.js'
import skillRouter from './routes/skillRouter.js'
import experienceRouter from './routes/experienceRouter.js'
import contactRouter from './routes/contactRouter.js'


const app = express()
dotenv.config()

const port = process.env.PORT

// app.use(cors)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/profile', profileRouter)
app.use('/api/project', projectRouter)
app.use('/api/skill', skillRouter)
app.use('/api/experience', experienceRouter)
app.use('/api/contact', contactRouter)
<<<<<<< HEAD
app.use('/api/certificate', certificateRouter)
app.use('/api/testimoni', testimoniRouter)
app.use('/api/resume', resumeRouter)
app.use('/api/auth', authRouter)


app.listen(port, () => {
    console.log(`berjalan di http://localhost:${port}`)
=======


// app.get('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: `Selamat datang di API Portofolio Dinamis!`
//     })
// })

// //endpoint untuk cek status
// app.get('api/status', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: `Server dalam keadaan sehat dan Aktif.`,
//         timeStamp: new Date().toISOString()
//     })
// })

// app.use((req, res) => {
//     res.status(404).json({
//         success: false,
//         message: 'Endpoint tidak di temukan'
//     })
// })

// app.get('/api/biodata', (req, res) => {
//     res.status(200).json({
//             success: true,
//             data: {
//                 nama: 'Gabriel Dwi Putra T',
//                 kelas: 'XI Backend',
//                 cita_cita: 'Orang Kaya',
//                 hobi: 'ngoding'
//             }
//     })
// })

app.listen(port, () => {
    console.log(`wets, jalan jalan ke http://localhost:${port}`)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
})