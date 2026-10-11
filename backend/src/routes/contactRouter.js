import express from 'express'
import contactController from '../controllers/contactController.js'

const router = express.Router()


router.get('/', contactController.getAllContact)
router.get('/:id', contactController.getContactById)

router.post('/', contactController.createMessage)

router.delete('/:id', contactController.deleteMessage)

export default router