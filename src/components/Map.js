import React from 'react'
import GoogleMapReact from 'google-map-react'
import { GoLocation } from "react-icons/go";
import {BiArrowBack} from 'react-icons/bi';

const LocationPin = ({ text }) => (
  <div className="pin">
    <GoLocation className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel,setSection }) => (
    
  <div className="map w-full">
    <div className=" flex justify-start text-text_secondary">
        <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>setSection('post')}>
            <BiArrowBack size={20}/>
        </div>
        <div className=' flex justify-between mx-8'>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight text-center mb-4">Choose Location</h1>
        </div>
    </div>
    <div className="w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: ''}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map