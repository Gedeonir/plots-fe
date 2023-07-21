import React from 'react'
import Switcher from './Switcher'
import { Link } from 'react-router-dom'
import Weather from './Weather'
import {IoIosNotificationsOutline} from "react-icons/io"
import {HiOutlineWallet} from 'react-icons/hi2'
import Dropdown from './Dropdown'

export const navBarOptions=[
  {
    option:"Profile",
    icon:<div className="h-4 px-2 rounded-full w-4 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>,
    path:'/profile'

  },
  {
    option:'Balance Management',
    icon:'',
    path:'/balance-management'
  },
  {
    option:'Plots history',
    icon:'',
    path:'/History'
    
  },
  {
    option:'Sign out',
    icon:''
  }

]

export default function NavBar(props) {

  return (
    <header aria-label="Site Header" className="body-font sticky top-0 z-40 w-full py-2 px-3 bg-secondary rounded-t-2xl">
      <div className="flex justify-between">
        <div className="w-full flex items-center lg:hidden ">
          <span>SWIPLOT</span>
        </div>
        <div className="flex justify-end gap-6 relative cursor-pointer w-full text-text_secondary">
          <div className='lg:min-w-2xl hidden rounded-lg lg:flex justify-center gap-2 text-btn_primary'><HiOutlineWallet size={22}/><p className='font-bold text-md pb-1'>5000 RF</p></div>
          <Switcher/>
          <IoIosNotificationsOutline size={28} onClick={()=>{props.setOpenNotificationAction(!props.openNotificationAction);props.setOpenAccount(false)}}/>
          <button className="h-6 px-2 rounded-full w-6 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat" onClick={()=>{props.setOpenAccount(!props.openAccount);props.setOpenNotificationAction(false)}}/>
        </div>
      </div>
      <div className='w-full lg:hidden flex justify-between pt-2'>
        <div className='lg:min-w-2xl rounded-lg flex justify-center gap-2 text-btn_primary'><HiOutlineWallet size={22}/><p className='font-bold text-md'>5000 RF</p></div>
        <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-btn_primary text-secondary rounded-md px-2 py-1 text-sm flex gap-2">Deposit</button>
      </div>
    </header>

  )
}
