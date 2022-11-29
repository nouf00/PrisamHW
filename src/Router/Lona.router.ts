import express from 'express';
import validate from '../Middleware/Valdation';
import {Loan } from '../Zod-Schema/lona'
import {bookprasmType} from '../Zod-Schema/Book'
import {userprasmType} from '../Zod-Schema/UserSchema'


import{ addLona,getallLona,getlonabybookANDUSERid,getlonabybookid} from '../Controller/lona.cont'

export const router=express.Router();

router.post('/lona' ,validate(Loan), addLona);
router.get('/', getallLona);
router.get('/:book_id/:user_id',getlonabybookANDUSERid );
router.get('/:book_id' , getlonabybookid);
export default router;