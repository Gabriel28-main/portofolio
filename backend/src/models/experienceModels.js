<<<<<<< HEAD
import db from '../config/db.js'
=======
import db from "../config/db.js"
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

const getAllExperiences = async () => {
    const [rows] = await db.query('SELECT * FROM experiences')
    return rows
}

const getExperiencesById = async (id) => {
    const [rows] = await db.query('SELECT * FROM experiences WHERE id = ?', [id])
    return rows
}

const addExperience = async (data) => {
<<<<<<< HEAD
const { title, company, location, start_date, end_date , is_current, description } = data
=======
const { title, company, location, start_date, end_date      , is_current, description } = data
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
    const [result] = await db.execute(
        'INSERT INTO experiences (title, company, location, start_date, end_date, is_current, description) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, company, location, start_date, end_date, is_current, description]
    )
    return result
}

const updateExperience = async (id, data) => {
    const { title, company, location, start_date, end_date, is_current, description } = data
    const [result] = await db.execute(
        'UPDATE experiences SET title = ?, company = ?, location = ?, start_date =?, end_date = ?, is_current = ?, description = ? WHERE id = ?', [title, company, location, start_date, end_date, is_current, description, id]
    )
    return result
}

const deleteExperience = async (id) => {
    const [result] = await db.execute('DELETE FROM experiences WHERE id = ?', [id])
    return result
}

export default {
    getAllExperiences,
    getExperiencesById,
    addExperience,
    updateExperience,
    deleteExperience
}