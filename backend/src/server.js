import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()

const port = process.env.PORT

app.use(express.json())
app.use(cors)

app.listen(port, () => {
    console.log(`wets, jalan jalan ke http://localhost:${port}`)
})