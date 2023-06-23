import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config()
const USERNAME=process.env.USER_NAME;
const PASSWORD=process.env.PASSWORD


const connection = async() =>{
    const URL=`mongodb://127.0.0.1:27017/Login`
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log('database connected successfully');
    } catch (error) {
        console.log(error.message);
    }
}

export default connection;