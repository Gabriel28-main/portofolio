import { createProjectModels, deleteProjectModels, getAllProjectsModels, getProjectByIdModels, updateProjectModels } from '../models/projectModels.js'

export const getAllProjects = async (req, res) => {
    try {
        const projects = await getAllProjectsModels()

        if (!projects) {
            return res.status(400).json({
                success: false,
                message: `there's no project`
            })
        }

        return res.status(200).json({
            success: true,
            message: 'berhasil mengambil semua project',
            projects: projects
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}

export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const project = await getProjectByIdModels(id)

        if (!project) {
            return res.status(400).json({
                success: false,
                message: `there's no project with id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil mengambil project dengan id: ${id}`,
            project
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}


export const createProject = async (req, res) => {
    try {
        const data = req.body

        if (!data.title) {
            return res.status(400).json({
                success: false,
                message: 'title wajib di isi'
            })
        }

        const addedProject = await createProjectModels(data)

        return res.status(201).json({
            success: true,
            message: 'Berhasil menambahkan project',
            project: {
                id: addedProject.insertId
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}


export const updateProject = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body

        if (!data.title) {
            return res.status(400).json({
                success: false,
                memssage: 'title wajib diisi'
            })
        }

        const updatedProject = await updateProjectModels(id, data)

        if (updatedProject.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Project dengan id ${id}, tidak ditemukan`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil mengubah data dengan id ${id}!`
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}


export const deleteProject = async (req, res) => {
    try {
        const { id } = req.body

        const result = await deleteProjectModels(id)

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Project dengan id ${id}, tidak ditemukan`
            })
        }

        res.status(200).json({
            success: true,
            message: `Berhasil menghapus data dengan id ${id}`
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}

