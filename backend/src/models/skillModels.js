import db from "../config/db.js";

const getAllSkill = async () => {
    const [rows] = await db.query('SELECT * FROM skills ORDER BY category, name')
    return rows
}

 const getSkillById = async (id) => {
    const [rows] = await db.query('SELECT * FROM skills WHERE id = ?', [id])
    return rows
}

 const addSkill = async (data) => {
    const { name, category, level, icon } = data
    const [result] = await db.execute(
        'INSERT INTO skills (name, category, level, icon) VALUES (?, ?, ?, ?)',
        [name, category || 'Other', level || 0, icon]
    )

    return result
}

const updateSkill = async (id, data) => {
    const { name, category, level, icon } = data
    const [result] = await db.execute('UPDATE skills SET name = ?, category = ?, level = ?, icon = ? WHERE id = ?', [name, category, level, icon, id])

    return result
}

const deleteSkill = async (id) => {
    const [rows] = await db.execute('DELETE FROM skills WHERE id = ?', [id])
    return rows
}

export default { getAllSkill, getSkillById, addSkill, updateSkill, deleteSkill }