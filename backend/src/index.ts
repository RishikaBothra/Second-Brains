import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.Port
const DBURI = process.env.DB_URL;
import signupRoute from "./routes/Signup";
app.use('/api/v1', signupRoute);
import signinRoute from "./routes/signin"
app.use('/api/v1', signinRoute);
import addcontent from "./routes/addcontent"
app.use('/api/v1', addcontent);
import getusercontent from './routes/getusercontent';
app.use('/api/v1', getusercontent);
import deleteusercontent from './routes/deleteusercontent';
app.use('/api/v1', deleteusercontent);
import sharelink from './routes/sharelink';
app.use('/api/v1', sharelink);
import getlink from './routes/getlink';
app.use('/api/v1', getlink);


async function connectdb() {
    try {

        const connectdb = await mongoose.connect(DBURI as string);
        console.log("Connected to Database!");
        if (connectdb) {
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            })
        }
    }
    catch (err) {
        console.log("Error connecting to Database!", err);
    }
}
connectdb();

app.get("/", (_req, res) => {
    res.json({
        message: "hi there!"
    })
})
