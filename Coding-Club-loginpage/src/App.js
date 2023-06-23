import appcss from "./App.module.css";
import Login from "./components/login/login";
import Homepage from "./components/home/home";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
const [user,setLoginUser]=useState({})

  return <BrowserRouter>
  <Routes>
  <Route exact path="/" element={user&&user._id ? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
  <Route  path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
  </Routes>
</BrowserRouter>;
}

export default App;
