import contactModels from "../models/contactModels.js";


const getAllContact = async (req, res) => {
    try {
        const messages = await contactModels.getAllContact()
        return res.status(200).json({
            success: true,
            message: 'Berhasil menampilkan semua pesan',
            messages: messages
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'THERE IS AN INTERNAL SERVER ERROR'
        })
    }
}


const getContactById = async (req, res) => {
    try {
        const { id } = req.params

        const result = await contactModels.getContactById(id)

        if (!result) {
            return res.status(404).json({
                success: false,
                message: `Tidak dapat menemukan pesan dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            devMessage: `Berhasil mendapatkan pesan dengan id ${id}`,
            message: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'THERE IS AN INTERNAL SERVER ERROR'
        })
    }
}


const createMessage = async (req, res) => {
    try {
        const data = req.body

        if (!data.sender_email || !data.message) {
            return res.status(400).json({
                success: false,
                message: 'something is missing lho ya'
            })
        }

        const result = await contactModels.createMessage(data)

        return res.status(201).json({
            success: true,
            message: 'berhasil membuat pesan baru',
            id: result.insertId
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'THERE IS AN INTERNAL SERVER ERROR'
        })
    }
}


const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params

        const result = await contactModels.deleteMessage(id)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan pesan dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil menghapus pesan dengan id ${id}`
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'THERE IS AN INTERNAL SERVER ERROR'
        })
    }
}

export default {
    getAllContact,
    getContactById,
    createMessage,
    deleteMessage
}