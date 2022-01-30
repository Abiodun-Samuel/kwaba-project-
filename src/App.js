import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard.js/Dashboard";
import Protected from "./components/Protected";
import Error from "./components/Error";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  // const auth = useSelector((state) => state);
  // console.log(auth);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
