import { Book } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';
import { prisma } from '../Config/db'
import { bookBodyType } from "../Zod-Schema/Book"

export const getallbook = async (req: Request, res: Response) => {
    //:TODO Complete try catch
    const user = await prisma.Book.findMany();
    return res.status(200).json(user);
  };

  export const addbook= async(req:Request,res:Response)=>{
    const newuser=req.body as bookBodyType
    try{
        await prisma.Book.create({
            data: newuser
        });
        res.status(200).json({ message: 'MAPROK you addad new book'})

    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
    };
    
  