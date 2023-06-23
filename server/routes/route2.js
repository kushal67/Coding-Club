import  express  from 'express';

const route2=express.Router();

route2.post("/login",(req,res)=>{
    res.send('hello2');
})


export default route2;