import upload from "../config/uploadConfig.js";
import resumeController from "../controllers/resumeController.js";
import express from "express";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'
const router = express.Router()

router.get('/', verifyToken, authorizeRoles("Admin"), resumeController.getAllResumes)
router.get('/active', resumeController.getActiveResume)
router.get('/:id', verifyToken, authorizeRoles("Admin"), resumeController.getResumeById)

router.post('/', upload.single('resume_file'), resumeController.uploadResume)

router.put('/:id', resumeController.updateResume)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), resumeController.deleteResume)

export default router