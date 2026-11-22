<<<<<<< HEAD
import express from "express";
import { getAllExperiences, getExperiencesById, addExperience, updateExperience, deleteExperience } from "../controllers/experienceController.js";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'
=======
import express from 'express'
import { addExperience, deleteExperience, getAllExperiences, getExperiencesById, updateExperience } from '../controllers/experienceController.js'
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

const router = express.Router()

router.get('/', getAllExperiences)
router.get('/:id', getExperiencesById)

<<<<<<< HEAD
router.post('/', verifyToken, authorizeRoles("Admin"), addExperience)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateExperience)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteExperience)
=======
router.post('/', addExperience)

router.put('/:id', updateExperience)

router.delete('/:id', deleteExperience)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export default router