import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';
import { prisma } from '../Config/db'
import { userBodyType } from "../Zod-Schema/UserSchema"

export const getalluser = async (req: Request, res: Response) => {
    //:TODO Complete try catch
    const user = await prisma.User.findMany();
    return res.status(200).json(user);
  };

  export const addUser= async(req:Request,res:Response)=>{
    const newuser=req.body as userBodyType
    try{
        await prisma.User.create({
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
    