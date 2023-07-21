import React from 'react'
import Layout from '../components/Layout'
import {MdOutlineEditNote} from 'react-icons/md'
import {FiMessageSquare} from "react-icons/fi"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function UserProfile() {
    const Cards=[1,2,3,4,5,6,7,8,9,10]

    const options = {
      nav: true,
      navText: ["<div class='nav-btn prev-slide bg-btn_primary text-secondary w-8 h-8 rounded-full absolute inset-y-20 left-0 text-xl'>‹</div>", "<div class='nav-btn next-slide bg-btn_primary text-secondary w-8 h-8 rounded-full absolute inset-y-20 right-0 text-xl'>›</div>"],
      // autoplay: true,
      dots: false,
      // autoplayTimeout: 8500,
      smartSpeed: 2500,
      responsive: {
          0: {
              items: 3
          },
          600: {
              items: 6
          },
          1000: {
              items: 8
          }
      },
    };

  return (
    <Layout>
        <div className='w-full pb-32 lg:pb-24 min-h-screen overflow-y-auto max-h-screen'>
            <div className="h-72 mb-24 mx-2 relative cursor-pointer py-4 rounded-t-xl">
                <div className='h-56'>
                    <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-full w-full rounded-t-xl object-cover'/>
                    <div className='py-1 my-4 mx-3 rounded-full px-3 text-center bg-secondary opacity-80 absolute top-5 right-3'>
                        <MdOutlineEditNote size={25}/>
                    </div>
                </div>
                <div className="text-sm w-full px-2 bg-secondary text-text_primary pb-2 absolute right-0 left-0">
                    <div className='h-24 w-24 max-w-lg rounded-full p-1 mt-[-50px] bg-secondary '>
                        <img src='https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg' className='h-full w-full object-cover relative rounded-full'/>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 justify-between my-2'>
                        <div className='text-lg'>
                            <span className='font-bold'>IRAFASHA Gedeon</span>
                            <p className='text-text_secondary text-sm'>Bio</p>
                        </div>
                        <div className='lg:col-span-2 grid grid-cols-3 gap-2'>
                            <div className='lg:text-center flex lg:block justify-start gap-2 hover:text-btn_primary'>                            
                                <p className='font-bold text-xl'>10</p>
                                <p className='py-1'>Followers</p>
                            </div>
                            <div className='lg:text-center flex lg:block justify-start gap-2 hover:text-btn_primary'>                            
                                <p className='font-bold text-xl'>10</p>
                                <p className='py-1'>Following</p>
                            </div>
                            <div className='lg:text-center flex lg:block justify-start gap-2 hover:text-btn_primary'>                            
                                <p className='font-bold text-xl'>10</p>
                                <p className='py-1'>Plots</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-2 text-sm absolute top-2 right-0'>
                            <button className='text-secondary col-span-3 font-bold w-full  mx-auto  px-2 rounded-md bg-btn_primary py-1 h-8'>Follow</button>
                            <button className='text-secondary font-bold w-8 px-2 rounded-full bg-text_secondary flex justify-start gap-2 py-2  h-8'><FiMessageSquare size={15}/></button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </Layout>
  )
}
