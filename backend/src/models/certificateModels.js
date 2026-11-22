import db from '../config/db.js'

const getAllCertificate = async () => {
    const [rows] = await db.query('SELECT * FROM certificates ORDER BY issue_date DESC')
    return rows
}

const getCertificateById = async (id) => {
    const [rows] = await db.query('SELECT * FROM certificates WHERE id = ?', [id])
    return rows[0]
}

const addNewCertificate = async (data) => {
    const { name, issuer, issue_date, expiration_date, credential_id, credential_url, description } = data
    const [result] = await db.execute(
        'INSERT INTO certificates (name, issuer, issue_date, expiration_date, credential_id, credential_url, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, issuer, issue_date || null, expiration_date || null, credential_id || null, credential_url || null, description || null])

    return result
}

const updateCertificate = async (id, data) => {
    const { name, issuer, issue_date, expiration_date, credential_id, credential_url, description } = data;

    const [result] = await db.execute(
        'UPDATE certificates SET name = ?, issuer = ?, issue_date = ?, expiration_date = ?, credential_id = ?, credential_url = ?, description = ? WHERE id = ?',
        [name, issuer, issue_date, expiration_date || null, credential_id || null, credential_url || null, description || null, id]
    );

    return result;
};

// 5. DELETE - Menghapus sertifikat dari database berdasarkan ID
const deleteCertificate = async (id) => {
    const [result] = await db.execute('DELETE FROM certificates WHERE id = ?', [id]);
    return result;
};

export default { getAllCertificate, getCertificateById, addNewCertificate, updateCertificate, deleteCertificate }