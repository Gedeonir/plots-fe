import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {BiArrowBack} from 'react-icons/bi';

export default function Attendes(props) {
    const Cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [open,setOpen]=React.useState(false)
    const options = {
        nav: false,
        navText: ["<div class='nav-button owl-prev sm:hidden'>‹</div>", "<div class='nav-button owl-next sm:hidden'>›</div>"],
        dots: true,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
      };
  return (
    <div className={` px-4 w-full transform duration-1000 delay-300 ease-in-out absolute top-0 bg-secondary overflow-y-auto min-h-screen max-h-screen ${props.section==="Attendes"?'translate-x-0':'translate-x-full'}`}>
        <div className='py-4 sticky top-0 z-10 bg-secondary flex justify-start gap-2 text-btn_primary'>
            <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>props.setSection('')}>
                <BiArrowBack size={25}/>
            </div>
            <h3 className="font-bold  opacity-70 w-full">Attendance</h3>
        </div>
        <div className='w-full'>
            <h3 className='px-3 py-3 font-bold text-btn_primary opacity-70'>Top attendes</h3>
            <OwlCarousel className="w-full relative h-56" {...options} >
                {Cards.map((card,index)=>{
                    return(  
                    <div className="h-56 mx-2 relative drop-shadow cursor-pointer rounded-t-xl" key={index}>
                        <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-16 w-full rounded-t-xl'/>
                        <div className="text-sm w-full px-2 bg-secondary text-text_primary font-bold pb-2 absolute right-0 left-0 text-center">
                            <div className='h-12 w-12 max-w-lg rounded-full mx-auto p-1 mt-[-20px] bg-secondary '>
                                <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-full w-full object-cover relative rounded-full'/>
                            </div>
                            <span>IRAFASHA Gedeon</span>
                            <p className='opacity-80 text-xs'>@ig</p>
                            <p className='opacity-80 text-xs'>10k followers</p>
                            <button className='text-secondary font-bold border border-btn_primary px-4 rounded-md bg-btn_primary my-2'>Follow</button>
                        </div>
                    
                    </div>
                    )

                })}
                
            </OwlCarousel>
        </div>
        <div>
            <div className='flex justify-between pb-3 w-full'>
                <h3 className="font-bold text-btn_primary opacity-70 w-full">All Attendes</h3>
                <div className='flex justify-start gap-2 w-full px-4'>
                    <p className="w-full text-right py-1">Filter by</p>
                    <div className='bg-text_secondary_2 px-2 rounded-lg w-full py-1 relative bg-opacity-50' onClick={()=>setOpen(!open)}>
                        <p>a</p>
                        {open&&
                        <div id="dropdown" className="z-10 absolute top-10 left-0 bg-secondary divide-y  divide-text_secondary w-full rounded-b-lg shadow">
                            <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
                                <li className="px-3 py-2 w-full text-left cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out">
                                    Followers
                                </li>
                                <li className="px-3 py-2 w-full text-left cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out">
                                    Following
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                    
                </div>
            </div>
            <div className="w-full relative grid lg:grid-cols-3 grid-cols-2">
            {Cards.map((card)=>{
                return(  
                    <div className="h-72 mb-3 mx-2 relative drop-shadow cursor-pointer py-4 rounded-t-xl">
                        <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-24 w-full rounded-t-xl'/>
                        <div className="text-sm w-full px-2 bg-secondary text-text_primary font-bold pb-2 absolute right-0 left-0 text-center">
                            <div className='h-24 w-24 max-w-lg rounded-full mx-auto p-2 mt-[-50px] bg-secondary '>
                                <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-full w-full object-cover relative rounded-full'/>
                            </div>
                            <span>IRAFASHA Gedeon</span>
                            <p className='opacity-80 text-xs'>@ig</p>
                            <p className='opacity-80 text-xs'>10k followers</p>
                            <button className='text-secondary font-bold border border-btn_primary px-4 rounded-md bg-btn_primary my-2'>Follow</button>
                        </div>
                    
                    </div>
                )

            })}
            
            </div>
    </div>

    </div>
  )
}
