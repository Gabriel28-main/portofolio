import express from 'express'
<<<<<<< HEAD
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/projectController.js";
=======
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from '../controllers/projectController.js'
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

const router = express.Router()

router.get('/', getAllProjects)
router.get('/:id', getProjectById)

<<<<<<< HEAD
router.post('/', verifyToken, authorizeRoles("Admin"), createProject)

router.put('/:id', verifyToken, authorizeRoles("Admin"), updateProject)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), deleteProject)
=======
router.post('/', createProject)

router.put('/:id', updateProject)

router.delete('/:id', deleteProject)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export default router