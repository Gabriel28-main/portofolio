import skillModels from "../models/skillModels.js"


export const getAllSkill = async (req, res) => {
    try {
        const skills = await skillModels.getAllSkill()
        return res.status(200).json({
            success: true,
            totalData: skills.length,
            data: skills
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}

export const getSkillById = async (req, res) => {
    try {
        const { id } = req.params
        const skill = await skillModels.getSkillById(id)

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan skill dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            data: skill
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}

export const addSkill = async (req, res) => {
    try {
        const data = req.body

        if (!data.name) {
            return res.status(400).json({
                success: false,
                message: 'Harap untuk isi kolom name'
            })
        }

        const result = await skillModels.addSkill(data)

        return res.status(201).json({
            success: true,
            message: 'Skill berhasil ditambahkan',
            data: {
                id: result.insertId
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}

export const updateSkill = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Harap mengisi Id'
            })
        }

        const skill = await skillModels.updateSkill(id, data)

        if (skill.affectedRows === 0) {
            return res.status(200).json({
                success: false,
                message: 'data tidak ditemukan lho ya...'
            })
        }

        return res.status(200).json({
            success: true,
            message: `Berhasil mengubah skill dengan id ${id}`, 
            result: await skillModels.getSkillById(id)
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan pada server',
            error: error.message
        })
    }
}


export const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params
        const result = await skillModels.deleteSkill(id)

        if (result.affectedRows === 0) {
            return res.status(200).json({
                success: false,
                message: 'data tidak ditemukan lho ya...'
            })
        }

        return res.status(200).json({
            success: true,
            message: `Skill telah dihapus`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}