import { readProfile, changeProfile } from "../models/profileModels.js"

// 1. Mengambil Data Profil
export const getProfile = async (req, res) => {
    try {
        const profile = await readProfile()

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: 'tidak ada data profile'
            })
        }

        return res.status(200).json({
            success: true,
            messsage: 'Berhasil mendapatkan data profile',
            data: profile
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            success: false,
            message: `something's wrong with the server`,
            error: err.message
        })
    }
}

// 2. Mengupdate Data Profile
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        //validasi data
        if (!data.name || !data.role) {
            return res.status(400).json({
                success: false,
                messsage: 'name & role wajib diisi'
            })
        }

        const result = await changeProfile(id, data)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `profile dengan id ${id} tidak ditemukan`
            })
        }

        res.status(200).json({
            success: true,
            message: 'data profil berhasil diperbaharui',
            data
        })
    } catch (error) {
        console.error('error update profile: ', error.message)
        res.status(500).json({
            success: false,
            message: `something's wrong with the server`,
            error: error.message
        })
    }
}