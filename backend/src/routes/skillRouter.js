import express from "express";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'
import { getAllSkill, getSkillById, addSkill, updateSkill, deleteSkill } from "../controllers/skillController.js";

const router = express.Router()

router.get('/', getAllSkill)
router.get('/:id', getSkillById)

router.post('/', verifyToken, authorizeRoles("Admin"), addSkill)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateSkill)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteSkill)

export default router