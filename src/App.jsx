import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import StudentsForm from "./Components/StudentsForm";
import Navbar from "./Components/Navbar";

// HOC
const WithHeaderSidebar = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex w-full h-full">
        <Sidebar />

        <div className="flex w-full">{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WithHeaderSidebar>
            <Home />
          </WithHeaderSidebar>
        }
      />
      <Route
        path="/students"
        element={
          <WithHeaderSidebar>
            <Students />
          </WithHeaderSidebar>
        }
      />
      <Route
        path="/studentForm"
        element={
          <WithHeaderSidebar>
            <StudentsForm />
          </WithHeaderSidebar>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
