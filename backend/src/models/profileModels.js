import db from "../config/db.js";

export const readProfile = async () => {
    const [rows] = await db.query('SELECT * FROM profile LIMIT 1')
    return rows[0]
}

export const changeProfile = async (id, data) => {
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

