import React from 'react'
import GoogleMapReact from 'google-map-react'
import { TiLocation } from "react-icons/ti";
import {BiArrowBack} from 'react-icons/bi';

const LocationPin = ({ text }) => (
  <div className="pin text-2xl">
    <TiLocation className="pin-icon text-text_primary" size={50}/>
    <p className="pin-text bg-primary font-bold">{text}</p>
  </div>
)


const Map = ({ location, zoomLevel,setSection }) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return(
    <div className="map w-full relative">
      <div className=" flex justify-start text-text_secondary absolute z-40 py-4 bg-primary px-4 rounded-lg left-4 top-4">
        <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>setSection('post')}>
          <BiArrowBack size={20}/>
        </div>
        <div className=' flex justify-between mx-2'>
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight text-center">Choose Location</h1>
        </div>
      </div>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC-dosD3RIizxbdjJnsOLIOVeq4GJpcHRc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="Address"
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}


export default Map