import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
      <Route path="/" element={<Home/>}/>
        </Routes>
    </>
  );
}

export default App;
