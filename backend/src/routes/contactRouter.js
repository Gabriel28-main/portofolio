import express from "express";
import contactController from "../controllers/contactController.js";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

const router = express.Router();


router.get('/', verifyToken, authorizeRoles("Admin"), contactController.getAllContact)
router.get('/:id', verifyToken, authorizeRoles("Admin"), contactController.getContactById)

router.post('/', contactController.createMessage)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), contactController.deleteMessage)

export default router