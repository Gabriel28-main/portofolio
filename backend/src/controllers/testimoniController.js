import testimoniModels from '../models/testimoniModels.js'

const getAllTestimoni = async (req, res) => {
    try {
        const result = await testimoniModels.getAllTestimoni()

        return res.status(200).json({
            success: true,
            message: 'berhasil mendapatkan semua testimoni',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `there's an error in the INTERNAL SERVER`,
            error: error.message
        })
    }
}

const getTestimoniById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await testimoniModels.getTestimoniById(id)

        if (!result) {
            return res.status(400).json({
                success: false
            })
        }
        return res.status(200).json({
            success: true,
            message: `berhasil mendapatkan testimoni dengan id ${id}`,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `there's an error in the INTERNAL SERVER`,
            error: error.message
        })
    }
}

const createTestimoni = async (req, res) => {
    try {
        const data = req.body
        if (!data.name || !data.role) {
            return res.status(400).json({
                success: false,
                message: ' pastikan nama/role terisi!'
            })
        }

        const result = await testimoniModels.createTestimoni(data)

        if (!result) {
            return res.status(400).json({
                success: false,
                message: 'tidak dapat menginput testimoni'
            })
        }

        return res.status(201).json({
            success: true,
            message: 'berhasil membuat testimoni baru',
            data: result.insertId
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: `there's an error in the INTERNAL SERVER`,
            error: error.message
        })
    }
}

const updateTestimoni = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        if (!data.name || !data.role) {
            return res.status(400).json({
                success: false,
                message: 'pastikan nama/role terisi!'
            })
        }

        const result = await testimoniModels.updateTestimoni(id, data)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat meengubah data dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil mengubah data dengan id ${id}`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `there's an error in the INTERNAL SERVER`,
            error: error.message
        })
    }
}

const deleteTestimoni = async (req, res) => {
    try {
        const { id } = req.params
        const result = await testimoniModels.deleteTestimoni(id)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan testimoni dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil mennghapus testimoni dengan id ${id}`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `there's an error in the INTERNAL SERVER`,
            error: error.message
        })
    }
}

export default {
    getAllTestimoni,
    getTestimoniById,
    createTestimoni,
    updateTestimoni,
    deleteTestimoni
}
