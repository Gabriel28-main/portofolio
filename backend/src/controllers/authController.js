import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import userModels from "../models/userModels.js";

const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Wajib mengisi username, email, dan password'
            })
        }

        const existingUsername = await userModels.findUsername(username)
        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username ini telah dipakai, silahkan ganti username'
            })
        }

        const existingEmail = await userModels.findByEmail(email)
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email ini telah terdaftar, silahkan gunakan email lain'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const result = await userModels.createUser({
            username,
            email,
            password: hashedPassword,
            role
        })

        return res.status(201).json({
            success: true,
            message: 'Registrasi berhasil',
            data: {
                id: result.insertId,
                username,
                email,
                role
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server saat registerasi',
            error: error.message
        })
    }
}



const login = async (req, res) => {
    try {
        const { identifier, password } = req.body //identifier itu bisa jadi email, atau username, mana mana ajaaa

        if (!identifier || !password) {
            return res.status(400).json({
                success: false,
                message: 'wajib mengisi identifier ataupun password'
            })
        }

        let user = await userModels.findUsername(identifier)
        if (!user) {
            user = await userModels.findByEmail(identifier)
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Identifier tidak dapat ditemukan'
            })
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if (!isMatched) {
            return res.status(401).json({
                success: false,
                message: 'Password salah, silahkan coba lagi'
            })
        }

        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }

        const secret = process.env.JWT_SECRET
        const expiresIn = process.env.JWT_EXPIRES_IN

        const token = jwt.sign(payload, secret, { expiresIn     })

        return res.status(200).json({
            success: true,
            message: 'Login Berhasil',
            token: token,
            user: payload
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server saat login',
            error: error.message
        })
    }
}

const getMyProfile = async (req, res) => {
    try {
        const users = await userModels.findById(req.user.id)
        if (!users) {
            return res.status(404).json({
                success: false,
                message: 'Tidak ada data pengguna'
            })
        }
        return res.status(200).json({
            success: false,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModels.getAllUsers()
        return res.status(200).json({
            success: true,
            message: 'berhasil menampilkan seluruh user',
            total: users.length,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'terjadi kesalahan pada server',
            error: error.message
        })
    }
}

export default {
    register,
    login,
    getMyProfile,
    getAllUsers
}