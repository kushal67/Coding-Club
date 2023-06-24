import jwt from "jsonwebtoken"

const createToken=async(id)=>{
    const token=await jwt.sign({id},process.env.JWT_SECRET,{
        expiresIN:"30d",
    })
}

export default createToken;