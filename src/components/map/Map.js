import React from "react";
import GoogleMapReact from "google-map-react";
import './map.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApiKey from "./google_api_key";



const Map=()=>{
    return(
        <div className="map">
            <div className="google-map">
            </div>
        </div>
    )
}

export default Map