import express from 'express'
import { getProfile, updateProfile } from '../controllers/profileController.js'
<<<<<<< HEAD
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'
=======

>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

const router = express.Router()

router.get('/', getProfile)
<<<<<<< HEAD
router.put('/:id', verifyToken, authorizeRoles("Admin"), updateProfile)
=======
router.put('/:id', updateProfile)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export default router