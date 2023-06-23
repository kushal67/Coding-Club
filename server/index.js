
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connection from './database/db.js';
import dotenv from "dotenv";
import User from './models/user.js'

const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())
app.use(express.json());

connection();

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        res.send({ message: "User Already Registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        await newUser.save();
        res.send({ message: "Successfully Registered Please Login now" });
      }
    } catch (err) {
      console.error("Error while querying the database:", err);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
  
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        if (password === foundUser.password) {
          res.send({ message: "Login Successful",foundUser });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (err) {
      console.error("Error while querying the database:", err);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
  

app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`)
})


