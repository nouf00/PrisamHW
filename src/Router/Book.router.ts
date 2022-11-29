import express from 'express';
import validate from '../Middleware/Valdation';
import {Book} from '../Zod-Schema/Book'
import{addbook ,getallbook} from "../Controller/Book.cont"

export const router=express.Router();

router.post('/book' ,validate(Book),addbook );
router.get('/', getallbook);



export default router;