// routes/Signup.ts
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import {z} from "zod";
import User from "../user";

const signupRoute = express.Router();

signupRoute.use(express.json())


const signupSchema = z.object({
    username:z.string().min(3).max(50),
    password:z
    .string()
    .min(3)
    .max(10)
    .regex(/[a-zA-Z]/,"Password needs both captial and small letters ")
    .regex(/[0-9]/ , "Password needs a number")
    .regex(/[&,*,@]/, "Password needs at least one special character (&, *, @)")
})

signupRoute.post("/signup", async(req:Request,res:Response): Promise<void> => {
    const parsed = signupSchema.safeParse(req.body)
    if(!parsed.success){
        res.status(411).send({
            message: "All the feilds are required"
        });
        return;
    }
    const {username,password} = parsed.data;

    try{
        const existinguser = await User.findOne({username})
        if(existinguser){
            res.status(403).send({
                message:"User alreday exists"
            });
            return;
        }
        const hashedpassword = await bcrypt.hash(password,10)
        await User.create({
            data:{
                username,
                hashedpassword,
            }
        });
        res.status(201).send({
            message:"User created succesfully"
        });
        return;


    }
    catch(error){
        res.status(500).send({
            message:"Inter server error"
        });
        return;
    }
    
})

export default signupRoute;
    
