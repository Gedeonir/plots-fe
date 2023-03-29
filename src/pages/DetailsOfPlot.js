import React from 'react'
import Rurasugiye from '../assets/Rurasugiye.jpeg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { VscCalendar} from "react-icons/vsc";
import { TfiLocationPin } from "react-icons/tfi";
import { VscLayoutStatusbar} from "react-icons/vsc";
import { MdStadium  } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import Layout from '../components/Layout';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const movies = [
    "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

export default function DetailsOfPlot() {
    const [open,setOpen]=React.useState();
    const options = {
        stagePadding: 15,
        margin: 24,
        nav: false,
        navText: ["<div class='nav-button owl-prev sm:hidden'>‹</div>", "<div class='nav-button owl-next sm:hidden'>›</div>"],
        dots: true,
        smartSpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
      };

  return (
    <Layout>
        <NavBar/>
        <div className='lg:flex justify-between sm:block px-3 py-3 max-w-5xl mx-auto rounded-lg min-h-screen drop-shadow-lg shadow-lg my-5 text-text_secondary'>
            <div className='lg:w-2/4 sm:w-full px-2 py-5 block'>
                <div className='w-full mx-auto'>
                    <OwlCarousel className="relative owl-carousel owl-theme" {...options} >
                        {movies.map((src,index)=>{
                            return(
                                <section
                                className="relative flex h-72 bg-gray-900 my-5"
                                >
                                    <img
                                        alt="Night"
                                        src={src}
                                        className="absolute inset-0 h-full w-full object-cover items-center opacity-90"
                                    />

                                </section>
                            )
                        })}
                    </OwlCarousel>
                </div>
                <div className="lg:grid lg:grid-cols-2 gap-2 w-full my-4">
                    <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                        <label className='text-sm text-text_primary font-bold uppercase'>REGULAR</label>
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-medium text-gray-900 ">5000 RF</h3>
                            <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-xs py-1'>Buy</button>
                        </div>
                    </div>
                    <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                        <label className='text-sm text-text_primary font-bold uppercase'>VIP</label>
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-medium text-gray-900 ">50000 RF</h3>
                            <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-xs py-1'>Buy</button>
                        </div>
                    </div>
                    <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                        <label className='text-sm text-text_primary font-bold uppercase'>VVIP Table of 6</label>
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-medium text-gray-900 ">300000 RF</h3>
                            <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-xs py-1'>Buy</button>
                        </div>
                    </div>
                </div>                   
            </div>
            
            <div className='w-96'>
                <main
                aria-label="Main"
                className="dark:bg-slate-800 justify-center px-6 lg:col-span-7 py-4 lg:px-8 xl:col-span-6"
                >
                    <div className='flex justify-between text-text_secondary'>
                        <h1 className='text-left py-4 text-2xl '>About this event</h1>
                        <div className='py-2'>
                            <span onClick={()=>setOpen(!open)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-xs font-medium text-center text-gray-900 dark:  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50"> 
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='w-4'><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </span>
                            {open&&
                            <ul className="py-2 text-xs absolute my-2 bg-gray-200  dark:bg-slate-900 drop-shadow-lg mx-4" aria-labelledby="dropdownDefaultButton">
                                <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700">
                                    Report
                                </li>
                                <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700">
                                    Remove event
                                </li>
                                
                            </ul>}
                        </div>
                    </div>
                    <div className='py-2 w-full'>
                        <h3 className="text-sm font-medium text-left text-gray-900 uppercase ">Plot name</h3>

                    </div>
                    <div className='flex justify-start gap-4 py-2'>
                        <VscCalendar className='my-auto font-normal' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-600 uppercase dark:text-gray-400'>Start Date:</label>
                            <div className='lg:flex justify-between sm:block'>
                                <h3 className="text-sm font-medium text-gray-900 ">Saturday,04 March 2023</h3>
                                <p className="text-sm font-medium text-gray-900  mx-4">18:00 PM</p>

                            </div>
                        </div>
                        

                    </div>

                    <div className='flex justify-start gap-4 py-2'>
                        <VscCalendar className='my-auto font-normal  ' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-600 uppercase dark:text-gray-400'>End Date:</label>
                            <div className='lg:flex justify-between sm:block'>
                                <h3 className="text-sm font-medium text-gray-900 ">Saturday,04 March 2023</h3>
                                <p className="text-sm font-medium text-gray-900  mx-4">23:00 PM</p>

                            </div>
                        </div>
                        

                    </div>

                    <div className='flex justify-start gap-4 py-2'>
                        <TfiLocationPin className='my-auto font-normal  ' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-600 dark:text-gray-400 uppercase'>Location:</label>
                            <h3 className="text-sm font-medium text-gray-900 ">Kigali Rwanda</h3>
                        </div>
                        

                    </div>
                    
                    <div className='flex justify-start gap-4 py-2'>
                        <MdStadium className='my-auto font-normal  ' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Venue:</label>
                            <h3 className="text-sm font-medium text-gray-900 ">Kigali Conference and Exhibition Village (Camp Kigali)</h3>
                        </div>
                        
                    </div>

                    <div className='flex justify-start gap-4 py-2'>
                        <VscLayoutStatusbar  className='my-auto font-normal ' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Status:</label>
                            <h3 className="text-sm font-medium text-gray-900 ">Upcoming</h3>
                        </div>
                        
                    </div>

                    <div className='flex justify-start gap-4 py-2'>
                        <IoPersonOutline  className='my-auto font-normal ' size={20}/>
                        <div>
                            <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Organizer:</label>
                            <h3 className="text-sm font-medium text-gray-900 ">IG</h3>
                        </div>
                        
                    </div>
                            
                </main>
            </div>
        </div>
       
    </Layout>

  )
}
