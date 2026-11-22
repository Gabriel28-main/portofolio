import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const db = pool.promise()

pool.getConnection((err, connection) => {
    if (err) {
        console.log('Kesalahan Koneksi Database:', err.message)
    } else {
        console.log('berhasil terhubung ke Database Mysql (db_portofolio)')
        connection.release()
    }
})
<<<<<<< HEAD
export default db     
=======

export default db
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
