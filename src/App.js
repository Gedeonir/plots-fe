import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// require('dotenv').config()
const App = () => {
  return (
    <SkeletonTheme baseColor="#e9e9e9" highlightColor="#8e8b8b">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;
