import express from 'express'
import { getAllSkill, getSkillById, addSkill, updateSkill, deleteSkill } from '../controllers/skillController.js'

const router = express.Router()

router.get('/', getAllSkill)
router.get('/:id', getSkillById)

router.post('/', addSkill)

router.put('/:id', updateSkill)

router.delete('/:id', deleteSkill)

export default router