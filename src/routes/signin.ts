import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {PrismaClient} from "@prisma/client";
import{z} from "zod";
import dotenv from "dotenv";
dotenv.config();

const app = express.Router();
app.use(express.json());
const prisma = new PrismaClient();

app.post("/api/v1/signin",async (req,res) =>{
    const{username,password} = req.body;

    if(!username ||!password){
        return res.status(411).send({
            message: "All the fields are compulsory",
        });
    }
    const existinguser = await prisma.user.findUnique({username,password});
    if(!existinguser){
        return res.status(403).send({
            message: "User does not exist",
        });
    }

    const token = jwt.sign({
        username: existinguser.username,
        id: existinguser.id,
    },process.env.JWT_SECRET as string, {
        expiresIn: "1h",
    });
    return res.status(200).send({
        message: "User signed in successfully",
        token,
    });

    })

export default app;
