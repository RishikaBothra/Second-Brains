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
import signinRoute from "./routes/signin"
app.use('/api/v1', signinRoute);
import addcontent from "./routes/addcontent"
app.use('/api/v1',addcontent);
import getusercontent from './routes/getusercontent';
app.use('/api/v1', getusercontent);
import deleteusercontent from './routes/deleteusercontent';
app.use('/api/v1', deleteusercontent);
import sharelink from './routes/sharelink';
app.use('/api/v1', sharelink);
import getlink from './routes/getlink';
app.use('/api/v1', getlink); 

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

app.get("/", (_req,res)=>{
    res.json({
        message:"hi there!"
    })
})






