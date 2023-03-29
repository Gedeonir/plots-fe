import React from 'react'
import Switcher from './Switcher'
import { Link } from 'react-router-dom'
import Weather from './Weather'
import {IoIosNotificationsOutline} from "react-icons/io"
import {HiOutlineWallet} from 'react-icons/hi2'
import Dropdown from './Dropdown'


export default function NavBar() {
  const [openAccount,setOpenAccount]=React.useState(false);
  const options=[
    {
      option:"Profile",
      icon:<div className="h-4 px-2 rounded-full w-4 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>

    },
    {
      option:'Balance Management',
      icon:''
    },
    {
      option:'Plots Library',
      icon:''
    },
    {
      option:'Sign out',
      icon:''
    }

  ]
  return (
    <header aria-label="Site Header" className="body-font sticky top-0 z-10 w-full py-2 px-3 bg-secondary rounded-t-2xl">
      <div className="flex justify-between">
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
        <div className="flex justify-end gap-6 relative cursor-pointer w-full text-text_secondary">
          <div className='lg:min-w-2xl hidden rounded-lg lg:flex justify-center gap-2 text-btn_primary'><HiOutlineWallet size={22}/><p className='font-bold text-md pb-1'>5000 RF</p></div>
          <Switcher/>
          <Link to="/notifications">
            <IoIosNotificationsOutline size={28}/>
          </Link>
          <button className="h-6 px-2 rounded-full w-6 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat" onClick={()=>setOpenAccount(!openAccount)}/>
          {openAccount&& <Dropdown options={options} className="w-48"/>}
        </div>
      </div>
      <div className='w-full lg:hidden flex justify-between pt-2 px-2'>
        <div className='lg:min-w-2xl rounded-lg flex justify-center gap-2 text-btn_primary'><HiOutlineWallet size={22}/><p className='font-bold text-md'>5000 RF</p></div>
        <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-btn_primary text-secondary rounded-md px-2 py-1 text-sm flex gap-2">Deposit</button>
      </div>
      
    </header>

  )
}
