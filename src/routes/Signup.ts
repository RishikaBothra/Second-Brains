import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";
import{z} from "zod";

const app = express.Router();
app.use(express.json());
const prisma = new PrismaClient();

const signupSchema = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(8).max(20),

});
 app.post("/api/v1/signup",async (req,res) =>{
    
    const parsed = signupSchema.safeParse(req.body);
    if(!parsed.success){
        return res.status(411).send({
            message: "All the fields are compulsory",
            error: parsed.error.format(),
        });
    }
    const{username,password} = parsed.data;

    try{
        const existinguser = await prisma.user.findOne({ username});
        if(existinguser){
            res.status(403).send({
                message: "User already exists",
            });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data:{
                username,
                password: hashedpassword,
            },
        });
        return res.status(200).send({
            message: "User created successfully",
        });
        
    }
    catch (error) {
        return res.status(500).send({
            message: "Internal server error",
        });
    }

 })



export default app;