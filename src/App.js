import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import { AuthContextProvider } from "./Components/context/AuthContext";
// import Login from "./Components/Pages/Login";
// import Signup from "./Components/Pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} /> */}
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
