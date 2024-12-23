import express from 'express';
import  tokenVerification  from '../Middleware/tokenVerification.js';
import {sendMessage, getMessages} from '../Controllers/messageController.js';

const router = express.Router();

router.post('/send/:id',tokenVerification,sendMessage);
router.get('/:id',tokenVerification,getMessages);




export default router;