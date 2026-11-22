import express from 'express'
import authController from '../controllers/authController.js'
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/me', verifyToken, authController.getMyProfile)

router.get('/users', verifyToken, authorizeRoles('Admin'), authController.getAllUsers)

export default router