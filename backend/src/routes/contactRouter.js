<<<<<<< HEAD
import express from "express";
import contactController from "../controllers/contactController.js";
import { verifyToken, authorizeRoles } from '../middlewares/authMiddlewares.js'

const router = express.Router();


router.get('/', verifyToken, authorizeRoles("Admin"), contactController.getAllContact)
router.get('/:id', verifyToken, authorizeRoles("Admin"), contactController.getContactById)

router.post('/', contactController.createMessage)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), contactController.deleteMessage)
=======
import express from 'express'
import contactController from '../controllers/contactController.js'

const router = express.Router()


router.get('/', contactController.getAllContact)
router.get('/:id', contactController.getContactById)

router.post('/', contactController.createMessage)

router.delete('/:id', contactController.deleteMessage)
>>>>>>> d02ce22dd07233d0aa9656919d61604b56fc4c9f

export default router