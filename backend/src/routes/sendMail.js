import express from 'express';
import sendMail from '../controller/sendMail.js';

const router = express.Router();

router.post('/send-email', sendMail)

export default router;

