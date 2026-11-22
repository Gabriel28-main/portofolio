import db from "../config/db.js";

const findUsername = async (username) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
    return rows[0]
}

const findByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    return rows[0]
}

const findById = async (id) => {
    const [rows] = await db.query('SELECT id, username, email, role, created_at FROM users WHERE id = ?', [id])
    return rows[0]
}


const createUser = async (data) => {
    const { username, password, email, role } = data
    const [rows] = await db.execute('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, password, role])
    return rows
}

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT id, username, email, role, created_at, updated_at FROM users ORDER BY created_by DESC')
    return rows
}


export default {
    findUsername,
    findByEmail,
    findById,
    getAllUsers,
    createUser
}