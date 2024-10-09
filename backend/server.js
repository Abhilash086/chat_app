import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// To parse the incoming request with JSON payload (from req.body)
app.use(express.json()); 

app.get('/',(req,res)=>{
    // Root route http://localhost:5000/
    res.send("Hello World");
});

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running at port : ${PORT}`)
});