import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/profileRouter.js'

const app = express()
dotenv.config()

const port = process.env.PORT

// app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


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
})