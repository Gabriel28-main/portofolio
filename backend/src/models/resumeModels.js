
import db from "../config/db.js"
const getAllResumes = async () => {
    const [rows] = await db.query('SELECT * FROM resumes ORDER BY created_at DESC')
    return rows
}

const getActiveResume = async () => {
    const [rows] = await db.query('SELECT * FROM resumes WHERE is_active = TRUE ORDER BY created_at DESC LIMIT 1')
    return rows
}

const getResumeById = async (id) => {
    const [rows] = await db.query('SELECT * FROM resumes WHERE id = ?', [id])
    return rows
}

const createResume = async (data) => {
    const { title, file_name, file_path, file_size, version, is_active } = data
    if (is_active) {
        await db.execute('UPDATE resumes SET is_active = FALSE')
    }

    const [rows] = await db.execute('INSERT INTO resumes (title, file_name, file_path, file_size, version, is_active) VALUES (?, ?, ?, ?, ?, ?)', [title, file_name, file_path, file_size, version || '1.0', is_active !== undefined ? is_active : true])

    return rows
}


const updateResume = async (id, data) => {
    const { title, version, is_active } = data

    if (is_active) {
        await db.execute('UPDATE resumes SET is_active = FALSE WHERE id =?', [id])
    }

    const [result] = await db.execute('UPDATE resumes SET title = ?, version = ?, is_active = ? WHERE id = ?', [title, version, is_active, id])

    return result
}

const deleteResume = async (id) => {
    const [result] = await db.execute('DELETE FROM resumes WHERE id = ?', [id])
    return result
}

export default {
    getAllResumes,
    getActiveResume,
    getResumeById,
    createResume,
    updateResume,
    deleteResume
}