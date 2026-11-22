<<<<<<< HEAD
import express from "express";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'
import { getAllSkill, getSkillById, addSkill, updateSkill, deleteSkill } from "../controllers/skillController.js";
=======
import express from 'express'
import { getAllSkill, getSkillById, addSkill, updateSkill, deleteSkill } from '../controllers/skillController.js'
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

const router = express.Router()

router.get('/', getAllSkill)
router.get('/:id', getSkillById)

<<<<<<< HEAD
router.post('/', verifyToken, authorizeRoles("Admin"), addSkill)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateSkill)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteSkill)
=======
router.post('/', addSkill)

router.put('/:id', updateSkill)

router.delete('/:id', deleteSkill)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export default router