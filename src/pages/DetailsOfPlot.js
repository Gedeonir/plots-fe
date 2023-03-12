import React from 'react'
import Rurasugiye from '../assets/Rurasugiye.jpeg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { VscCalendar} from "react-icons/vsc";
import { TfiLocationPin } from "react-icons/tfi";
import { VscLayoutStatusbar} from "react-icons/vsc";
import { MdStadium  } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

export default function DetailsOfPlot() {
    const [open,setOpen]=React.useState();
  return (
    <div className='block min-h-screen bg-gray-50 dark:bg-slate-900'>
        <NavBar/>
        <div className='block py-8'>

            <section className="bg-gray-50 dark:bg-slate-800 lg:max-w-6xl mx-auto rounded-2xl drop-shadow-lg shadow-sm">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 "
                    >
                        <img
                            alt="Night"
                            src={Rurasugiye}
                            className="absolute inset-0 h-full w-full object-cover opacity-90"
                        />

                    </section>

                    <main
                    aria-label="Main"
                    className="dark:bg-slate-800 justify-center sm:px-12 lg:col-span-7 lg:py-2 lg:px-8 xl:col-span-6"
                    >
                        <div className='flex justify-between'>
                            <h1 className='text-left py-4 text-2xl text-gray-900 dark:text-gray-300'>About this event</h1>
                            <div className='py-2'>
                                <span onClick={()=>setOpen(!open)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-xs font-medium text-center text-gray-900 dark:text-gray-300  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50"> 
                                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className='w-4'><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </span>
                                {open&&
                                <ul className="py-2 text-xs absolute my-2 bg-gray-200 dark:text-gray-300 dark:bg-slate-900 drop-shadow-lg mx-4" aria-labelledby="dropdownDefaultButton">
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
                            <h3 className="text-sm font-medium text-center text-gray-900 uppercase dark:text-gray-300 mx-4">CONCERT RURASUGIYE BY IBIHAME BY’IMANA</h3>

                        </div>
                        <div className='flex justify-start gap-4 py-2'>
                            <VscCalendar className='my-auto font-normal text-rose-700 ' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-600 uppercase dark:text-gray-400'>Start Date:</label>
                                <div className='lg:flex justify-between sm:block'>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Saturday,04 March 2023</h3>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">18:00 PM</p>

                                </div>
                            </div>
                            

                        </div>

                        <div className='flex justify-start gap-4 py-2'>
                            <VscCalendar className='my-auto font-normal text-rose-700 ' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-600 uppercase dark:text-gray-400'>End Date:</label>
                                <div className='lg:flex justify-between sm:block'>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Saturday,04 March 2023</h3>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mx-4">23:00 PM</p>

                                </div>
                            </div>
                            

                        </div>

                        <div className='flex justify-start gap-4 py-2'>
                            <TfiLocationPin className='my-auto font-normal text-rose-700 ' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-600 dark:text-gray-400 uppercase'>Location:</label>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Kigali Rwanda</h3>
                            </div>
                           

                        </div>
                        
                        <div className='flex justify-start gap-4 py-2'>
                            <MdStadium className='my-auto font-normal text-rose-700 ' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Venue:</label>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Kigali Conference and Exhibition Village (Camp Kigali)</h3>
                            </div>
                           
                        </div>

                        <div className='flex justify-start gap-4 py-2'>
                            <VscLayoutStatusbar  className='my-auto font-normal text-rose-700' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Status:</label>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Upcoming</h3>
                            </div>
                           
                        </div>

                        <div className='flex justify-start gap-4 py-2'>
                            <IoPersonOutline  className='my-auto font-normal text-rose-700' size={20}/>
                            <div>
                                <label className='text-sm font-normal text-gray-500 dark:text-gray-400 uppercase'>Organizer:</label>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">IG</h3>
                            </div>
                           
                        </div>
                        <div className="lg:grid lg:grid-cols-3 gap-2 w-full my-4">
                            <div className='border border-rose-700 px-2 py-2 rounded-lg'>
                                <label className='text-xs font-normal text-gray-500 dark:text-gray-400 uppercase'>REGULAR</label>
                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">5000 RF</h3>
                                    <button className='bg-rose-700 px-4 rounded-lg text-gray-300 hover:bg-transparent border border-red-700 transition-all duration-150 text-xs py-1'>Buy</button>
                                </div>
                            </div>
                            <div className='border border-rose-700 px-2 py-2 rounded-lg'>
                                <label className='text-xs font-normal text-gray-500 dark:text-gray-400 uppercase'>VIP</label>
                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">50000 RF</h3>
                                    <button className='bg-rose-700 px-4 rounded-lg text-gray-300 hover:bg-transparent border border-red-700 transition-all duration-150 text-xs py-1'>Buy</button>
                                </div>
                            </div>
                            <div className='border border-rose-700 px-2 py-2 rounded-lg'>
                                <label className='text-xs font-normal text-gray-500 dark:text-gray-400 uppercase'>VVIP Table of 6</label>
                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">300000 RF</h3>
                                    <button className='bg-rose-700 px-4 rounded-lg text-gray-300 hover:bg-transparent border border-red-700 transition-all duration-150 text-xs py-1'>Buy</button>
                                </div>
                            </div>
                        </div>                        
                    </main>
                </div>
            </section>
            <div className='my-8 py-4 lg:max-w-6xl mx-auto'>
                <h3 className='text-xl font-medium text-gray-900 dark:text-gray-300'>Ratings and Reviews</h3>
                <div class="mt-4 flex items-center gap-4">
                    <p class="text-3xl font-medium text-gray-900 dark:text-gray-300">
                        3.8
                        <span class="sr-only"> Average review score </span>
                    </p>

                    <div>
                        <div class="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-800 dark:text-gray-500 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        </div>

                        <p class="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
                    </div>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
                    <blockquote>
                        <header class="sm:flex sm:items-center sm:gap-4">
                        <div class="flex">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-800 dark:text-gray-500 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                        </div>

                        <p class="mt-2 font-medium sm:mt-0 text-gray-900 dark:text-gray-300">The best thing money can buy!</p>
                        </header>

                        <p class="mt-2 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                        possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                        alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                        asperiores! Iste?
                        </p>

                        <footer class="mt-4">
                        <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                        </footer>
                    </blockquote>

                    <blockquote>
                        <header class="sm:flex sm:items-center sm:gap-4">
                        <div class="flex">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-800 dark:text-gray-500 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                        </div>

                        <p class="mt-2 font-medium sm:mt-0 text-gray-900 dark:text-gray-300">The best thing money can buy!</p>
                        </header>

                        <p class="mt-2 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                        possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                        alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                        asperiores! Iste?
                        </p>

                        <footer class="mt-4">
                        <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                        </footer>
                    </blockquote>

                    <blockquote>
                        <header class="sm:flex sm:items-center sm:gap-4">
                        <div class="flex">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-800 dark:text-gray-500 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                        </div>

                        <p class="mt-2 font-medium sm:mt-0 text-gray-900 dark:text-gray-300">The best thing money can buy!</p>
                        </header>

                        <p class="mt-2 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                        possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                        alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                        asperiores! Iste?
                        </p>

                        <footer class="mt-4">
                        <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                        </footer>
                    </blockquote>

                    <blockquote>
                        <header class="sm:flex sm:items-center sm:gap-4">
                        <div class="flex">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-rose-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-800 dark:text-gray-500 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                            </svg>
                        </div>

                        <p class="mt-2 font-medium sm:mt-0 text-gray-900 dark:text-gray-300">The best thing money can buy!</p>
                        </header>

                        <p class="mt-2 text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                        possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                        alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                        asperiores! Iste?
                        </p>

                        <footer class="mt-4">
                        <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}
