import React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import {CiMenuKebab} from 'react-icons/ci'
import Dropdown from '../components/Dropdown'

export default function Notifications() {
    const options=[
        {
            option:"Mark as read",
            icon:''
        },
        {
            option:"Remove notification",
            icon:''
        },
        {
            option:"Mute IG",
            icon:''
        }
    ]

    const [openNotificationAction,setOpenNotificationAction]= React.useState(false)
    const [openNotificationAction2,setOpenNotificationAction2]= React.useState(false)

  return (
    <Layout>
        <NavBar/>
        <div className='px-3 pb-8 max-w-5xl mx-auto relative max-h-screen overflow-y-scroll'>
            <div className='sticky top-0 z-10  bg-primary px-3'>
                <div className='w-full lg:flex block justify-between'>
                    <div className='w-full flex justify-start py-2 text-sm text-text_secondary'>
                        <div className='px-2 rounded-l-lg py-2 border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>All</p>
                        </div>
                        <div className='px-2 py-2 border border-text_secondary_2 hover:bg-btn_primary  cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>Unread</p>
                        </div>
                        <div className='px-2 py-2 border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>Read</p>
                        </div>
                        <div className='px-2 rounded-r-lg py-2 border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>From Swiplot</p>
                        </div>

                    </div>
                    <div className='lg:w-1/4 py-2 lg:px-4'>
                        <button className='focus:outline-none transition duration-150 ease-in-out hover:bg-text_primary bg-btn_primary text-secondary rounded-md px-4 py-2 text-sm flex gap-2'>Mark all as read</button>
                    </div>
                </div>
                <div className='left-0 right-0 w-full flex justify-between mb-4'>
                    <div className='w-full flex justify-start py-2 text-sm text-text_secondary'><h1>Notifications(10)</h1></div>
                
                    <div className='lg:w-1/4  w-full py-1 lg:px-4'>
                        <button className='text-text_secondary hover:text-opacity-70 text-sm focus:outline-none transition duration-150 ease-in-out'>Clear Notifications</button>
                    </div>
                </div>
            </div>
            <div className='my-2 py-8 px-3 relative'>
                <div className='flex justify-between gap-2 w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-5 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="flex justify-start flex-wrap gap-2">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50 my-1">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className='flex justify-between gap-2 relative w-full mb-3 drop-shadow shadow bg-text_secondary_2 bg-opacity-0 rounded-lg text-text_secondary cursor-pointer hover:bg-opacity-10'>
                    <div className='flex justify-start gap-2 py-4 my-2 px-2 relative w-full'>
                        <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                        <div className="flex justify-start flex-wrap gap-4">
                            <div className='flex justify-start gap-2 flex-wrap'><p className="text-lg font-bold">IG</p><p className='font-normal text-lg'>Started following you</p></div>
                            <p className="text-sm font-light my-2 opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction2(!openNotificationAction2)}/>
                        {openNotificationAction2&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                    
                </div>

                    

                    
                
            </div>
        </div>
    </Layout>
  )
}
