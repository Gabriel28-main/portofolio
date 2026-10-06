import express from 'express'
import { addExperience, deleteExperience, getAllExperiences, getExperiencesById, updateExperience } from '../controllers/experienceController.js'

const router = express.Router()

router.get('/', getAllExperiences)
router.get('/:id', getExperiencesById)

router.post('/', addExperience)

router.put('/:id', updateExperience)

router.delete('/:id', deleteExperience)

export default router