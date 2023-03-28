import React from 'react'
import {AiFillStar }from 'react-icons/ai'
import {TiWeatherShower} from 'react-icons/ti'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IoCloseOutline} from 'react-icons/io5'


export default function Weather() {
    const [open,setOpen] = React.useState(false);

    return (
        <div className='flex justify-start items-center py-2 px-3'>
            <div>
                <button onClick={()=>setOpen(!open)} className='drop-shadow-lg shadow-lg rounded-lg w-20 h-20 block py-1 px-2 bg-bg_secondary text-primary'>
                    {open?(
                    <IoCloseOutline size={40} className="text-primary mx-auto"/>

                    ):(
                        <>
                        <div className='h-14 drop-shadow-sm w-18 mx-auto shadow-smtext-center'>
                            <p className='py-6 text-xl'>26</p>
                        </div><p>Tue</p>
                        </>  
                    )}
                    
                </button>
            </div>
            {open&&
            <div className='absolute left-40 top-2 grid grid-cols-3 gap-2 bg-primary px-2 py-1 rounded-lg delay-1000 duration-1000 ease-in-out'>
                <div>
                    <p className='text-center text-bg_primary text-xs'>Calendar</p>

                    <button className='drop-shadow-lg shadow-lg rounded-lg w-20 h-20 block py-1 px-2 bg-bg_secondary text-primary'>
                        <div className='h-14 drop-shadow-sm w-18 mx-auto shadow-sm  text-center'>
                            <p className='py-6 text-xl'>26</p>
                        </div>
                        <p className='text-xs'>Tue</p>
                    </button>
                    <AiFillStar className='mx-auto mt-2 text-bg_primary'/>
                </div>
                <div>
                    <p className='text-center text-bg_primary text-xs'>Weather</p>

                    <button className='drop-shadow-lg shadow-lg rounded-lg w-20 h-20 block py-1 px-2 bg-bg_secondary text-primary'>
                        <div className='h-14 drop-shadow-sm w-18 mx-auto px-2 shadow-sm  text-center'>
                            <TiWeatherShower size={45}/>
                        </div>
                        <p className='text-xs'>25 C</p>
                    </button>
                    <AiFillStar className='mx-auto mt-2 text-bg_primary'/>
                </div>
                <div>
                    <p className='text-center text-bg_primary text-xs'>Maps</p>

                    <button className='drop-shadow-lg shadow-lg rounded-lg w-20 h-20 block py-1 px-2 bg-bg_secondary text-primary'>
                        <div className='h-14 drop-shadow-sm w-18 mx-auto shadow-sm px-2  text-center'>
                            <FaMapMarkerAlt size={40}/>
                        </div>
                        <p className='text-xs'>Kigali</p>
                    </button>
                    <AiFillStar className='mx-auto mt-2 text-bg_primary'/>
                </div>
            </div>}
        </div>
    )
}
