
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import DetailsOfPlot from "./pages/DetailsOfPlot";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import Map from "./components/Map";


const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="login-into-your-account" element={<Login />} />
          <Route path="create-new-account" element={<SignUp />} />
          <Route path="plots/1/details" element={<DetailsOfPlot/>} />
          <Route path="search" element={<Search/>}></Route>
          <Route path="profile" element={<UserProfile/>}/>
          <Route path="map" element={<Map/>}></Route>
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;