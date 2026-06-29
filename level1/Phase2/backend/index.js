import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const port=process.env.PORT || 4000;



const app= express();





app.get("/",(req,resp)=>{
    return resp.status(200).json({message:"hello from phase2"})
})

app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})

