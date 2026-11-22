import express from "express";
import { getAllExperiences, getExperiencesById, addExperience, updateExperience, deleteExperience } from "../controllers/experienceController.js";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.get('/', getAllExperiences)
router.get('/:id', getExperiencesById)

router.post('/', verifyToken, authorizeRoles("Admin"), addExperience)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateExperience)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteExperience)

export default router