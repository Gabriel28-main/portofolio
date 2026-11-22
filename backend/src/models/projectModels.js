<<<<<<< HEAD
import db from '../config/db.js'
=======
import db from "../config/db.js";
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export const getAllProjectsModels = async () => {
    const [rows] = await db.query('SELECT * FROM projects ORDER BY created_at DESC')
    return rows
}

export const getProjectByIdModels = async (id) => {
    const [rows] = await db.execute('SELECT * FROM projects WHERE id = ?', [id])
    return rows[0]
}

export const createProjectModels = async (data) => {
    const { title, description, category, image_url, demo_url, github_url, tech_stack, is_featured } = data

    const [result] = await db.execute('INSERT INTO projects ( title, description, category, image_url, demo_url, github_url, tech_stack, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [title, description, category, image_url, demo_url, github_url, tech_stack, is_featured || false])

    return result
}

export const updateProjectModels = async (id, data) => {
    const { title, description, category, image_url, demo_url, github_url, tech_stack, is_featured } = data

    const [result] = await db.execute('UPDATE projects SET title = ?, description = ?, category = ?, image_url = ?, demo_url = ?, github_url = ?, tech_stack = ?, is_featured = ? WHERE id = ?', [title, description, category, image_url, demo_url, github_url, tech_stack, is_featured, id])

    return result
}

export const deleteProjectModels = async (id) => {
    const [result] = await db.execute('DELETE FROM projects WHERE id = ?', [id])
    return result
}
<<<<<<< HEAD

=======
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
