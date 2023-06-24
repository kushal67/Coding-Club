import dotenv from "dotenv";
import User from '../models/user.js'
import createToken from "../database/generateToken.js";
const registerUser = async (req, res) => {

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
            res.status(201).send({
                message: "Successfully Registered Please Login now",
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token:createToken(newUser._id),
            })


        }
    } catch (err) {
        console.error("Error while querying the database:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
}



const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            if (password === foundUser.password) {
                res.send({ message: "Login Successful", foundUser });
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
}

export { loginUser, registerUser }