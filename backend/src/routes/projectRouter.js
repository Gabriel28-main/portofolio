import express from 'express'
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/projectController.js";

const router = express.Router()

router.get('/', getAllProjects)
router.get('/:id', getProjectById)

router.post('/', verifyToken, authorizeRoles("Admin"), createProject)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateProject)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteProject)

export default router