import express, { Request, Response } from "express";
import {z} from "zod";
import dotenv from "dotenv";
import User from "../user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config()
const signinRoute = express.Router();
signinRoute.use(express.json());

const siginSchma = z.object({
    username:z.string().min(3).max(50),
    password:z
    .string()
    .min(3)
    .max(10)
    .regex(/[a-zA-Z]/,"Password needs both captial and small letters ")
    .regex(/[0-9]/ , "Password needs a number")
    .regex(/[&,*,@]/, "Password needs at least one special character (&, *, @)")
});

signinRoute.post("/signin", async(req:Request,res:Response): Promise<void> => {
    const prased = siginSchma.safeParse(req.body)
    if(!prased.success){
        res.status(411).send({
            message: "Please enter all the feilds",
        });
        return;
    }
    try{
        const{username,password} = req.body;
        const existinguser = await User.findOne({username,password});
        if(!existinguser){
            res.status(403).send({
                message:"user doesn't exists."
            });
            return;
        }
        const passwordmatch = await bcrypt.compare(password,existinguser.password); 
        if(!passwordmatch){
            res.status(403).send({
                message:"Invalid credentials."
            });
            return;
        }
        const token =  jwt.sign(
            {
                userId:existinguser._id, username:existinguser.username},
                process.env.JWT_SECRET as string,
                {expiresIn:"1h"}

        );
        res.status(200).send({
            message:"Signin succesful",
            token
        });
    }
    catch(error){
        res.status(500).send({
            message:"Internal server error",
        });
        return;
    }


    });

export default signinRoute;
