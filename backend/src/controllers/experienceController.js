import experienceModels from "../models/experienceModels.js"

export const getAllExperiences = async (req, res) => {
    try {
        const result = await experienceModels.getAllExperiences()

        return res.status(200).json({
            success: true,
            data: result
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}

export const getExperiencesById = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'wajib mengisi id'
            })
        }

        const result = await experienceModels.getExperiencesById(id)

        if (!result) {
            return res.status(404).json({
                sucesss: false,
                message: `tidak ada data dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There is a problem at the server',
            error: error.message
        })
    }
}

export const addExperience = async (req, res) => {
    try {
        const data = req.body

        if (!data.title || !data.company) {
            return res.status(400).json({
                success: false,
                message: 'title atau company tidak terisi!'
            })
        }

        const result = await experienceModels.addExperience(data)

        return res.status(201).json({
            success: true,
            message: 'berhasil menambahkan data',
            data: result.insertId
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}


export const updateExperience = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Isi id woi...'
            })
        }

        const result = await experienceModels.updateExperience(id, data)

        if (result.affectedRows === 0) {
            return res.status(400).json({
                succes: false,
                message: `tidak terdapat data dengan id ${id}`
            })
        }

        return res.status(201).json({
            success: true,
            message: 'berhasil mengubah experience',
            result: await experienceModels.getExperiencesById(id)

        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}

export const deleteExperience = async (req, res) => {
    try {
        const { id } = req.params
        const result = await experienceModels.deleteExperience(id)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                succes: false,
                message: `tidak dapat menemukan data dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `data dengan id ${id} dihapus`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}