import path from "path";
import resumeModels from "../models/resumeModels.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const getAllResumes = async (req, res) => {
    try {
        const resumes = await resumeModels.getAllResumes()
        return res.status(200).json({
            success: true,
            message: 'Berhasil mengambil semua Resume',
            resume: resumes
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}

const getActiveResume = async (req, res) => {
    try {
        const resume = await resumeModels.getActiveResume()

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: 'tidak ada CV Aktif'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'berhasil menampilkan resume aktif',
            activeResume: resume
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}

const getResumeById = async (req, res) => {
    try {
        const { id } = req.params
        const resume = await resumeModels.getResumeById(id)

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: `tidak dapat menemukan resume dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `berhasil menampilkan resume dengan id ${id}`,
            resume: resume
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}


const uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'File Resume format PDF wajib diunggah'
            })
        }

        const { title, version, is_active } = req.body
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Judul CV wajib diisi'
            })

        }

        const data = {
            title, file_name: req.file.filename,
            file_path: `/uploads/cv/${req.file.filename}`,
            file_size: req.file.size,
            version: version || '1.0',
            is_active: is_active === 'true' || is_active === true || is_active === '1'
        }

        const result = await resumeModels.createResume(data)

        if (!data.title || !data.file_name || !data.file_path || !data.file_size) {
            return res.status(400).json({
                message: `Wajib mengisi 'title', 'file_name', 'file_path', 'file_size'`
            })
        }

        return res.status(201).json({
            success: true,
            message: 'File PDF Resume berhasil diunggah!',
            data: {
                id: result.insertId,
                file_url: data.file_path,
                ...data
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}

const updateResume = async (req, res) => {
    try {
        const { id } = req.params
        const { title, version, is_active } = req.body

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Judul CV wajib di isi!'
            })
        }

        const data = {
            title,
            version: version || '1.0',
            is_active: is_active === 'true' || is_active === true || is_active === '1'
        }

        const result = await resumeModels.updateResume(id, data)

        if (result.affectedRows === 0) {
            return req.status(404).json({
                success: false,
                message: `tidak dapat menemukan cv dengan id ${id}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `CV dengan id ${id} berhasil diubah`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}


const deleteResume = async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);


        const { id } = req.params

        const resume = await resumeModels.getResumeById(id)

        if (!resume) {
            return res.status(400).json({
                success: false,
                message: `CV dengan id ${id} tidak dapat ditemukan.`
            })
        }

        const physicalPath = path.join(`${__dirname}../../public/uploads/cv ${resume.file_name}`)
        if (fs.existsSync(physicalPath)) {
            fs.unlinkSync(physicalPath)
        }

        await resumeModels.deleteResume(id)


        return res.status(200).json({
            success: true,
            message: `Berhasil menghapus data CV dengan id ${id}`
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `INTERNAL SERVER ERROR`,
            error: error.message
        })
    }
}


export default {
    getAllResumes,
    getActiveResume,
    getResumeById,
    uploadResume,
    updateResume,
    deleteResume
}