import express from "express";
import dotenv from "dotenv";

dotenv.config();

const  app = express();

app.post("/api/v1/signup",(req,res) => {
    const {username,password} = req.body;
    if(username && password){
        res.status(200).send({
            message: "User created succesfully",
        })
    }
    else{
        res.status(411).send({
            message: "All the feilds are compilsory",
        })
    }
    
})