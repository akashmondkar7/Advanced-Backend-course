import express from 'express'
import dotenv from 'dotenv'
import connectDB from './lib/db.js';
import User from './model/user.model.js';

dotenv.config();

const port=process.env.PORT || 4000;



const app= express();

app.use(express.json());





app.get("/",(req,resp)=>{
    return resp.status(200).json({message:"hello from reddis"})
})

app.post("/create",async(req,resp)=>{
    const{name,email,password}
  const user=await User.create({
    name,email,password
  })
  return resp.json(user)
})

app.post("/get",async(req,resp)=>{
  const user=await User.find({})
  return resp.json(user)
})

app.listen(port,()=>{
    connectDB();
    console.log(`Server Started ${port}`)
})

