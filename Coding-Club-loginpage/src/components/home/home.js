import React from "react";
import homecss from "./home.module.css"

const Homepage=({setLoginUser})=>{
    return(
        <div > 
            <button onClick={()=>setLoginUser({})}>LOGOUT</button>
        </div>
    )
}

export default Homepage