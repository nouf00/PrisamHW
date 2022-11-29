import { Lona } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';
import { prisma } from '../Config/db'
import { LoanBodyType,LoanReqestprasmType,LoanprasmType} from "../Zod-Schema/lona"
import { bookprasmType} from "../Zod-Schema/Book"
import {userprasmType} from "../Zod-Schema/UserSchema"

export const getallLona = async (req: Request, res: Response) => {
    //:TODO Complete try catch
    const user = await prisma. Lona.findMany();
    return res.status(200).json(user);
  };

  export const addLona= async(req:Request,res:Response)=>{
    const newuser=req.body as LoanBodyType
    try{
        await prisma. Lona.create({
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

    export const getlonabybookANDUSERid=async(req:Request,res:Response)=>{
const idB=req.params as bookprasmType
const idU=req.params as userprasmType
const result =await prisma.Loan.findMany({
    where:{idB , idU}
})
res.status(2000).json(result)


    }

    export const getlonabybookid=async(req:Request,res:Response)=>{
        const idB=req.params as bookprasmType
       const result =await prisma.Loan.findMany({
            where:{idB}
        })
        res.status(2000).json(result)
        
        
            }
    