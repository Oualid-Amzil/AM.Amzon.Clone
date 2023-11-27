import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LoginPage from "./auth/LoginPage";
import Header from "./conponents/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
