import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 4000;

const app=express();
app.use(express.json());
app.use(cors());

app.get('/api',(req,res)=>{
    res.json("Hello World!");
})

app.listen(PORT,()=>{
    console.log(`Server starting on port ${PORT}`)
})