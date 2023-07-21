import React from 'react'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import {RiBarcodeLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {GiSettingsKnobs} from 'react-icons/gi'
import {TbDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {HiMenuAlt1} from 'react-icons/hi'
import { useLocation } from 'react-router-dom'


export default function Sidebar(props) {
    const [selectedNav,setSelectedNav] = React.useState('Home');

    const location=useLocation();
    console.log(location);

    return (
        <div className={`pl-2 min-h-screen hidden lg:block duration-1000 delay-300 ease-in-out`}>
            <div className="h-16 w-full items-center lg:flex text-lg rounded-l-full py-2 pl-2 text-text_secondary">
                <button
                    className="block rounded  transition hover:text-rose-600/75 dark:text-gray-100"
                    onClick={()=>props.setToggleSidebar(!props.toggleSidebar)}
                >
                    <span className="sr-only">Toggle menu</span>
                   <HiMenuAlt1 size={30}/>
                </button>
                <span className={`text-lg  ml-4 duration-500 ease-in-out `}>SWIPLOT</span>
            </div>
            <ul className="mt-12 font-semibold">
                <li className={`flex w-full rounded-l-full py-2 pl-2 justify-between ${location.pathname==="/"&&'bg-secondary'}  text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6`}>
                    <Link to="/" className="flex items-center">
                        <CiGrid41 size={30}/>
                        <span className={`text-lg  ml-4 duration-500 ease-in-out`}>Home</span>
                    </Link>
                </li>
                <li className={`flex w-full justify-between rounded-l-full py-2 pl-2 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6 ${location.pathname==="/search"&&'bg-secondary'}  `}>
                    <Link to="/search" className="flex items-center">
                        <CiSearch size={30}/>
                        <span className={`text-lg  ml-4 duration-500 ease-in-out `}>Search</span>
                    </Link>
                </li>
                {/* <li className="flex w-full justify-between rounded-l-full py-2 pl-2 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <RiBarcodeLine size={30}/>
                        <span className="text-lg  ml-2">Saved plots</span>
                    </div>
                </li> */}
                <li className="flex w-full justify-between rounded-l-full py-2 pl-2 text-text_secondary hover:text-opacity-70 cursor-pointer items-center mb-6">
                    <div className="flex items-center">
                        <FiMessageSquare size={30}/>
                        <span className={`text-lg  ml-4 duration-500 ease-in-out `}>Messages</span>
                    </div>
                </li>
            
                <li className="flex w-full justify-between rounded-l-full py-2 pl-2 text-text_secondary hover:text-text-opacity-70 cursor-pointer items-center">
                    <div className="flex items-center">
                        <GiSettingsKnobs size={30}/>
                        <span className={`text-lg  ml-4 duration-500 ease-in-out `}>Settings</span>
                    </div>
                </li>
                <li className="w-full py-2 pl-2 text-text_secondary hover:text-text-opacity-70 cursor-pointer mt-12 items-center">
                    
                    <button className={`flex justify-center text-secondary bg-btn_primary cursor-pointer py-2 drop-shadow-xl shadow-xl w-11/12 rounded-md duration-1000 delay-300 ease-in-out overflow-hidden`} onClick={()=>props.setOpenModal(true)}>
                        Add plot
                    </button> 
                </li>
            </ul>
        </div>
    )
}
