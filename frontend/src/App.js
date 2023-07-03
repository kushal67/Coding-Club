import appcss from "./App.module.css";
import Login from "./components/login/login";
import Homepage from "./components/home/home";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { ChatState } from "./context/ChatProvider";
import Chatpage from "./components/chat/ChatPage";

function App() {
  // const { user } = ChatState();

  return (
    <div className="app">
      <Routes>
      <Route exact path="/" element={<Homepage />} />

      <Route path="/chats" element={ <Chatpage /> } />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
