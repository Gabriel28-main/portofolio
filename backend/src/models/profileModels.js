<<<<<<< HEAD
import db from '../config/db.js'

const readProfile = async () => {
=======
import db from "../config/db.js";

export const readProfile = async () => {
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
    const [rows] = await db.query('SELECT * FROM profile LIMIT 1')
    return rows[0]
}

<<<<<<< HEAD
const changeProfile = async (id, data) => {
=======
export const changeProfile = async (id, data) => {
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
    const {
        name, role, bio, about, avatar_url, resume_url,
        email, phone, address, github_url, linkedin_url, instagram_url
    } = data

    const [result] = await db.execute(
        `UPDATE profile SET 
            name = ?, role = ?, bio = ?, about = ?, avatar_url = ?, resume_url = ?,
            email = ?, phone = ?, address = ?, github_url = ?, linkedin_url = ?, instagram_url =?
            WHERE id = ?`,
        [name, role, bio, about, avatar_url, resume_url,
            email, phone, address, github_url, linkedin_url, instagram_url, id]
    )

    return result
}

<<<<<<< HEAD


export default {
    changeProfile, readProfile
}
=======
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f
