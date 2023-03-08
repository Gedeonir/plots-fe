
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login/Login";

const AppRoutes = (prop) => {
    const location = useLocation();
  
    return (
      <div>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="home/" index element={<Homepage/>} />
          <Route path="user-account/signin"  element={<Login/>} />
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;