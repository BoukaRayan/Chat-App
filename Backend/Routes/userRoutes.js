import express from 'express';
import  tokenVerification  from '../Middleware/tokenVerification.js';
import { getUsers } from '../Controllers/userController.js';

const router = express.Router();

router.get('/',tokenVerification,getUsers);




export default router;