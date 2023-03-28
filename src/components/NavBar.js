import React from 'react'
import Switcher from './Switcher'
import { Link } from 'react-router-dom'
import Weather from './Weather'
import {IoIosNotificationsOutline} from "react-icons/io"
import {HiOutlineWallet} from 'react-icons/hi2'

export default function NavBar() {
  return (
    <header aria-label="Site Header" className="body-font sticky top-0 z-10 w-full flex justify-between py-2 px-3">
      <div className="w-full flex items-center lg:hidden ">
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
      <div className="flex justify-end gap-6 relative cursor-pointer w-full">
        <div className='min-w-2xl rounded-lg border border-btn_primary flex justify-center text-btn_primary'><HiOutlineWallet size={32} className="px-2"/><p className='px-2 font-bold text-md py-1'>5000 RF</p></div>
        <Switcher/>

        <IoIosNotificationsOutline size={28}/>
        <button className="h-6 px-2 rounded-full w-6 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>
      </div>
    </header>

  )
}
