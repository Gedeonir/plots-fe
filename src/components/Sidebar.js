import React from 'react'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import {RiBarcodeLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {GiSettingsKnobs} from 'react-icons/gi'
import {TbDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'


export default function Sidebar(props) {
    return (
        <div className="pl-4 fixed min-h-screen hidden lg:block w-1/5 top-0">
            <div className="h-16 w-full items-center lg:flex hidden text-lg">
                <button
                    className="block rounded text-lg p-2.5 text-gray-900 transition hover:text-rose-600/75 dark:text-gray-100"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </button>
                <span>SWIPLOT</span>
            </div>
            <ul className="mt-12 font-semibold">
                <li className="flex w-full rounded-l-full py-2 pl-5 justify-between text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <Link to="/" className="flex items-center">
                        <CiGrid41 size={30}/>
                        <span className="text-lg  ml-2">Home</span>
                    </Link>
                </li>
                <li className="flex w-full justify-between rounded-l-full py-2 pl-5 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <Link className="flex items-center">
                        <CiSearch size={30}/>
                        <span className="text-lg  ml-2">Search</span>
                    </Link>
                </li>
                <li className="flex w-full justify-between rounded-l-full py-2 pl-5 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <RiBarcodeLine size={30}/>
                        <span className="text-lg  ml-2">Saved plots</span>
                    </div>
                </li>
                <li className="flex w-full justify-between rounded-l-full py-2 pl-5 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <FiMessageSquare size={30}/>
                        <span className="text-lg  ml-2">Messages</span>
                    </div>
                </li>
            
                <li className="flex w-full justify-between rounded-l-full py-2 pl-5 text-text_secondary hover:text-text_secondary_2 cursor-pointer items-center">
                    <div className="flex items-center">
                        <GiSettingsKnobs size={30}/>
                        <span className="text-lg  ml-2">Settings</span>
                    </div>
                </li>
            </ul>
            <button onClick={()=>props.setOpenModal(true)} className='flex justify-center px-4 py-2 rounded-3xl mx-auto drop-shadow-md shadow-lg mt-12 text-lg bg-btn_primary font-bold text-secondary'><TbDots size={30} className="mr-4"/> Create plot</button>
        </div>
    )
}
