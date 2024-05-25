import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
const App =()=>{

  return(
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App;
