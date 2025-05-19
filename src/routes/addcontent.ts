import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";
import{z} from "zod";


const app = express.Router();
app.use(express.json());
const prisma = new PrismaClient();

const contentSchema = z.object({
    link: z.string().url(),
    type: z.enum(["image","video"]),
    title: z.string().min(3).max(50),
});

app.post("/api/v1/content",async(req,res){
    const prased = contentSchema.safeParse(req.body);
    if(!prased.success){
        return res.status(411).send({
            message: "All the fields are compulsory",
            error: prased.error.format(),
        });
    }
    const {link,type,title} = prased.data;
    try{
        const existingcontent = await prisma.content.findUnique({
            where:{
                link,
            },
        });
        if(existingcontent){
            return res.status(403).send({
                message: "Content already exists",
            });
        }
        await prisma.content.create({
            data:{
                link,
                type,
                title,
            },
        });
        return res.status(200).send({
            message: "Content created successfully",
        });
    }
    catch (error) {
        return res.status(500).send({
            message: "Internal server error",
        });
    }
    


})