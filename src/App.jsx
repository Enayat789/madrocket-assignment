import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import StudentsForm from "./Components/StudentsForm";

function App() {
  return (
    <div className="flex">
      
      <Sidebar />

      {/* Main Contents */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/studentForm" element={<StudentsForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
