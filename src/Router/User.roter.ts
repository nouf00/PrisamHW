import express from 'express';
import validate from '../Middleware/Valdation';
import {users} from '../Zod-Schema/UserSchema'
import{addUser,getalluser} from '../Controller/User.cont'

export const router=express.Router();

router.post('/user' ,validate(users), addUser );
router.get('/', getalluser);


export default router;