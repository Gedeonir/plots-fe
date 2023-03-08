import React from "react";
import DashboardLayout from "../components/Dashboard";
import Map from "../components/map/Map";

const Homepage=()=>{

    return(
        <DashboardLayout>
            <Map/>
        </DashboardLayout>
    )
}

export default Homepage;