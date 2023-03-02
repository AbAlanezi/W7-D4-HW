import { prisma } from '../config/db'
import { Request, Response } from 'express'


 export const creatBlog = async (req:Request, res:Response)=>{
    try{
        const blog = req.body
        await prisma.blog.create({
            data:blog
        })
        res.json({
            message: "Blog created"
        })
    }catch(e){
        res.json(e)
    }

}

export const getAllBlog = async (req:Request, res:Response)=>{
    try{
        let blog = await prisma.blog.findMany({
            select:{
                id: true,
                title: true
            }
        })
        res.json(blog)
    }catch(e){
        console.log(e)
    }
}

export const updateBlog = async (req:Request, res:Response)=>{
    try{
        let blog = req.body
        const {id} = req.params
         await prisma.blog.update({
            where:{
                id: id
            },
            data:blog
        })
        res.json(blog)
    }catch(e){
        res.json(e)
    }

}

export const deleteBlog = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
         await prisma.blog.delete({
            where:{
                id: id
            }
        })
        res.json({
            message: "The blog is deleted"
        })
    }catch(e){
        res.json(e)
    }

}

