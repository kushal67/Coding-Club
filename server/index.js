
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connection from './database/db.js';
import dotenv from "dotenv";
import User from './models/user.js'
import { loginUser,registerUser } from './controllers/userController.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())
app.use(express.json());

connection();

app.post("/register", registerUser);
  
  app.post("/login", loginUser);

  app.use(notFound)
  app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`)
})


