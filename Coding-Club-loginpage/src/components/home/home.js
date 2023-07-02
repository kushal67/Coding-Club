import React from "react";
import homecss from "./home.module.css"
import { useHistory } from "react-router-dom";
const Homepage=({setLoginUser})=>{

    const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/chats");
    }
  }, [history]);



    return(
        <div > 
            <button onClick={()=>setLoginUser({})}>LOGOUT</button>
        </div>
    )
}

export default Homepage