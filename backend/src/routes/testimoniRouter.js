import testimoniController from "../controllers/testimoniController.js";
import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/authMiddlewares.js";

const router = express.Router()

router.get('/', testimoniController.getAllTestimoni)
router.get('/:id', testimoniController.getTestimoniById)

router.post('/', verifyToken, authorizeRoles("Admin", "User"), testimoniController.createTestimoni)

router.put('/:id', verifyToken, authorizeRoles("Admin"), testimoniController.updateTestimoni)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), testimoniController.deleteTestimoni)

export default router