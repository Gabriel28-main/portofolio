import certificateModels from '../models/certificateModels.js'

const getAllCertificate = async (req, res) => {
    try {
        const certificates = await certificateModels.getAllCertificate()
        return res.status(200).json({
            success: true,
            message: 'berhasil mengambil semua sertifikat lho ya',
            data: certificates
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terdapat kesalahan pada server',
            error: error.message
        })
    }
}

const getCertificateById = async (req, res) => {
    try {
        const { id } = req.params
        const certificate = await certificateModels.getCertificateById(id)

        if (!certificate) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan sertifikat dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil mengambil sertifikat dengan id ${id}`,
            data: certificate
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terdapat kesalahan pada server',
            error: error.message
        })
    }
}

const addNewCertificate = async (req, res) => {
    try {
        const data = req.body

        if (!data.name || !data.issue_date || !data.issuer) {
            return res.status(400).json({
                success: false,
                message: `ada yang hilang itu kace. nama kah issue date kah, issuernya kah.`
            })
        }


        const result = await certificateModels.addNewCertificate(data)

        return res.status(201).json({
            success: true,
            message: 'berhasil menambahkan certifikat baru.',
            data: { id: result.insertId }
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terdapat kesalahan pada server',
            error: error.message
        })
    }
}

const updateCertificate = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        if (!data.name || !data.issue_date || !data.issuer) {
            return res.status(400).json({
                success: false,
                message: `ada yang hilang itu kace. nama kah issue date kah, issuernya kah.`
            })
        }

        const result = await certificateModels.updateCertificate(id, data)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan data dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: 'data berhasil diubah'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terdapat kesalahan pada server',
            error: error.message
        })
    }
}


const deleteCertificate = async (req, res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status(400).json({
                message: 'tidak terdapat id'
            })
        }

        const result = await certificateModels.deleteCertificate(id)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan data dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil menghapus sertifikat dengan id ${id}`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terdapat kesalahan pada server',
            error: error.message
        })
    }
}



export default {
    getAllCertificate,
    getCertificateById,
    addNewCertificate,
    updateCertificate,
    deleteCertificate
}