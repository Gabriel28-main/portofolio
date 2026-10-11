import db from "../config/db.js";

const getAllContact = async () => {
    const [rows] = await db.query('SELECT * FROM messages ORDER BY created_at DESC')
    return rows
}

const getContactById = async (id) => {
    const [rows] = await db.query('SELECT * FROM messages WHERE id = ?', [id])
    return rows[0]
}

const createMessage = async (data) => {

    const { sender_name, sender_email, subject, message } = data

    const [result] = await db.execute(
        'INSERT INTO messages (sender_name, sender_email, subject, message) VALUES ( ?, ?, ?, ?)',
        [sender_name, sender_email, subject, message]
    )

    return result
}

const deleteMessage = async (id) => {
    const [result] = await db.execute('DELETE FROM messages WHERE id = ?', [id])
    return result
}


export default {
    getAllContact,
    getContactById,
    createMessage,
    deleteMessage
}