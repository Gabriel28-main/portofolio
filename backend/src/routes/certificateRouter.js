import certificateController from "../controllers/certificateController.js";
import express from "express";
import { verifyToken, authorizeRoles } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.get('/', certificateController.getAllCertificate)
router.get('/:id', certificateController.getCertificateById)

router.post('/', verifyToken, authorizeRoles("Admin"), certificateController.addNewCertificate)

router.put('/:id', verifyToken, authorizeRoles("Admin"), certificateController.updateCertificate)

router.delete('/:id', verifyToken, authorizeRoles("Admin"), certificateController.deleteCertificate)


export default router