import { prisma } from '../config/db'
import { Request, Response } from 'express'

export const Register = async (req:Request, res:Response)=>{
    try{
        const user = req.body
        await prisma.user.create({
            data: user
        })
        res.json({
            message: "user created"
        })
    }catch(e){
        console.log(e)
    }

    }


  export  const Login = async (req:Request, res:Response) =>{
        try{
            const {email, password} = req.body
            const user = await prisma.user.findFirst({
                where:{
                    email,
                    password
                }
            })
            if(!user){
               res.json({
                message: "The email or password is incorrect"
               })
            }
            res.json({
                message: `welcom ${user?.name}`
            })
        }catch(e){
            console.log(e)
        }

    }


    export const getAllBlogOfUser = async (req:Request, res:Response)=>{
        try{
         const id = req.params
         const user_id = await prisma.blog.findMany({
            where:{
                user_id: id
            },
            select:{
                title:true,
                user:{
                    select:{
                        name: true,
                        email: true
    
                    }
                }
            }
         })
         res.json(user_id)
        }catch(e){
            console.log(e)
        }
    }