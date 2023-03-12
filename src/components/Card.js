/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Rurasugiye from '../assets/Rurasugiye.jpeg'
import { TfiLocationPin } from "react-icons/tfi";
import { BiTimeFive } from "react-icons/bi";
import { MdStadium  } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div className="block group my-4 drop-shadow-lg shadow-sm">
        <img
            src={Rurasugiye}
            alt="Event-image"
            className="w-full object-cover transition duration-500 group-hover:opacity-50 h-[240px]"
        />
        

        <div className="h-42 w-full flex flex-col items-start justify-end p-3 bg-gray-50 dark:bg-gray-800">
            <p className="max-w-[40ch] text-sm font-medium text-gray-100 bg-rose-600 absolute top-3 py-1 px-4 rounded-2xl">CONCERT</p>
            <div class="flex items-center gap-2">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-300">
                    3.8
                    <span class="sr-only"> Average review score </span>
                </p>
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
            <h3 className="text-sm my-2 font-medium text-gray-900 dark:text-gray-300 uppercase">CONCERT RURASUGIYE BY IBIHAME BY’IMANA</h3>
            <div className='flex justify-between mx-2'>
                <div className='block text-center w-12 items-center'>
                    <h3 className='font-bold text-center mx-auto text-3xl text-rose-700 dark:text-rose-600'>04</h3>
                    <p className='text-center font-extralight text-gray-900 text-xs dark:text-gray-300'>March</p>
                    <p className='text-center font-light text-gray-900 text-xs dark:text-gray-300'>2023</p>
                </div>
                <div className='w-full block py-1'>
                    <div className='flex justify-between w-full text-gray-900 dark:text-gray-300 mb-2'>
                        <div className='flex justify-start w-full text-left'><TfiLocationPin className='text-xs mr-1 w-4'/><p className='text-xs font-normal'>Kigali,Rwanda</p></div>
                        <div className='flex justify-end w-full'><BiTimeFive className='text-sm mr-1 w-4'/><p className='text-xs'>18:00 PM</p></div>
                    </div>
                    <div className='flex justify-start w-full mb-2 text-gray-900 dark:text-gray-300'><MdStadium className='text-xs mr-1 w-6'/><p className='text-xs font-normal'>Kigali Conference and Exhibition Village (Camp Kigali)</p></div>
                    <div className='w-full mb-1 text-gray-900 dark:text-gray-300'>
                        <Link
                            to="/plots/details"
                            className="block w-full rounded bg-rose-600 text-xs py-1 text-center text-gray-100 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Book your slot
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}