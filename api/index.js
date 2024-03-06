import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const app=express();
mongoose.
connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDb is connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})

//app.use('/api/user',userRoutes)