import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.Port
const DBURI = process.env.DB_URL;
import signupRoute from "./routes/Signup";
app.use('/api/v1', signupRoute);


function startServer(){
    app.listen(port,() =>{
        console.log(`Server is running on port ${port}`);
    })
}
startServer();

async function connectdb(){
    try{
        
        await mongoose.connect(DBURI as string);
        console.log("Connected to Database!");
    }
    catch(err){
        console.log("Error connecting to Database!", err);
    }
}
connectdb();






