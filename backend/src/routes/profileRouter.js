import express from 'express'
import { getProfile, updateProfile } from '../controllers/profileController.js'
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.get('/', getProfile)
router.put('/:id', verifyToken, authorizeRoles("Admin"), updateProfile)

export default router