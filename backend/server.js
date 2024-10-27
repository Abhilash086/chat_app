import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import { app, server } from './socket/socket.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

const PORT = process.env.PORT || 5000;


// To parse the incoming request with JSON payload (from req.body)
app.use(express.json()); 
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running at port : ${PORT}`)
});