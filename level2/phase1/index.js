import express from 'express'
import dotenv from 'dotenv'
import connectDB from './lib/db.js';

dotenv.config();

const port=process.env.PORT || 4000;



const app= express();





app.get("/",(req,resp)=>{
    return resp.status(200).json({message:"hello from reddis"})
})

app.post("/create",(req,resp)=>{

})

app.listen(port,()=>{
    connectDB();
    console.log(`Server Started ${port}`)
})

