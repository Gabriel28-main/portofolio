import db from '../config/db.js'

const getAllTestimoni = async () => {
    const [rows] = await db.query('SELECT * FROM testimoni ORDER BY updated_at DESC')
    return rows
}

const getTestimoniById = async (id) => {
    const [rows] = await db.query('SELECT * FROM testimoni WHERE id = ?', [id])
    return rows
}

const createTestimoni = async (data) => {
    const { name, role, company, message, avatar_url, rating } = data
    const [result] = await db.execute('INSERT INTO testimoni (name, role, company, message, avatar_url, rating) VALUES (?, ?, ?, ?, ?, ?)',
        [name, role, company, message, avatar_url, rating]
    )
    return result
}

const updateTestimoni = async (id, data) => {
    const { name, role, company, message, avatar_url, rating } = data
    const [result] = await db.execute('UPDATE testimoni SET name = ?, role = ?, company = ?, message = ?, avatar_url = ?, rating = ? WHERE id = ?',
        [name, role, company, message, avatar_url, rating, id])
    return result
}

const deleteTestimoni = async (id) => {
    const [result] = await db.execute('DELETE FROM testimoni WHERE id = ?', [id])
    return result
}


export default { getAllTestimoni, getTestimoniById, createTestimoni, updateTestimoni, deleteTestimoni }