
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DetailsOfPlot from "./pages/DetailsOfPlot";

const AppRoutes = (prop) => {
  
    return (
      <div>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="login-into-your-account" element={<Login />} />
          <Route path="create-new-account" element={<SignUp />} />
          <Route path="plots/details" element={<DetailsOfPlot/>} />

        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;