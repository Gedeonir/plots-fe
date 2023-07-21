import React from 'react'
import { VscCalendar} from "react-icons/vsc";
import { TfiLocationPin } from "react-icons/tfi";
import { VscLayoutStatusbar} from "react-icons/vsc";
import { MdStadium  } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import Layout from '../components/Layout';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart,AiOutlineComment,AiFillHeart,AiOutlineFieldTime} from "react-icons/ai";
import { BsBookmarkPlus,BsBookmarkDashFill} from "react-icons/bs";
import {TbDots} from 'react-icons/tb'
import {HiOutlineFlag} from 'react-icons/hi'
import { TbShare3 } from 'react-icons/tb';
import { QRCodeCanvas } from 'qrcode.react';
import {BiDetail,BiArrowBack} from 'react-icons/bi';
import {WiStars} from 'react-icons/wi'
import Comments from './Comments';
import Attendes from './Attendes';
import {TiBook} from 'react-icons/ti';



const movies = [
    "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];


export default function DetailsOfPlot() {
    const [open,setOpen]=React.useState(false);
    const [like,setLike]=React.useState(false);
    const [qrData,setQrData] = React.useState("");
    const [section,setSection]=React.useState("")
    const [page,setPage]=React.useState("plotDetails")
    const [savedItem,setSavedItem]= React.useState(false);
    const [showTicket,setShowTicket]=React.useState(false);
    const [showDetails,setShowDetails] = React.useState(false)


    const options = {
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

      console.log(section);
  return (
    <Layout page={page}>

        <div className='grid relative lg:grid-cols-2 gap-4 max-h-screen min-h-screen overflow-y-hidden overflow-x-hidden'>
            <div className='relative owl-theme w-full overflow-hidden'>
                <div className='min-h-screen max-h-screen rounded-md relative '>
                    {movies.map((src,index)=>{
                        return(
                            
                            <img
                                key={index}
                                alt="Night"
                                src={src}
                                className="shrink-0 relative w-full items-center object-cover min-h-screen max-h-screen"
                            />

                        )
                    })}


                    <div className="flex justify-between absolute text-text_secondary_2 left-0 right-0 top-4">
                        <div className="flex justify-start gap-2 px-2">
                            <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
                                <BiArrowBack size={20}/>
                            </div>
                            <div className="h-6 w-6 rounded-full">
                                <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                                className="w-full h-full object-cover rounded-full"/>
                            </div>
                            <div className="block">
                                <div className='w-full grid'>
                                    <p className="text-sm font-bold word-wrap">IRAFASHA Gedeon</p>
                                    <button className='font-bold text-xs rounded-md w-1/2 bg-text_primary px-2 hover:text-opacity-70 cursor-pointer'>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 flex gap-4 relative'>
                            <div className="rounded-full cursor-pointer flex justify-start gap-2" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={25}/>:<AiOutlineHeart size={25}/>} 10 Likes</div>
                            <div className='relative'>
                                <TbDots size={25} onClick={()=>setOpen(!open)}/>
                                {open&&
                                <ul className="py-2 text-sm absolute my-2 z-10 bg-secondary text-text_secondary drop-shadow-lg right-2 w-32" aria-labelledby="dropdownDefaultButton">
                                    <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 flex justify-start gap-2 hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out">
                                        {!savedItem?<BsBookmarkPlus size={20}/>:<BsBookmarkDashFill size={20}/>} Save plot
                                    </li>

                                    <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 flex justify-start gap-2 hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out">
                                        <TbShare3 size={20}/> Share
                                    </li>

                                    <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 flex justify-start gap-2 hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out">
                                        <HiOutlineFlag size={20}/> Report
                                    </li>
                                
                                    <li onClick={()=>setOpen(false)} className="px-3 py-2 w-full text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700">
                                        Remove event
                                    </li>
                                    
                                </ul>}
                            </div>     
                        </div>
                    </div>
                    <div className="px-2 mt-4 absolute bottom-4 text-text_secondary_2 left-0 right-0">
                        <div className='gap-2'>
                            <div className={`flex justify-between gap-2 font-bold my-2`} onClick={()=>setSection("Attendes")}>
                                <div className='hover:opacity-80  cursor-pointer duration-300 ease-in-out flex justify-start gap-2'>
                                    <IoPeopleOutline size={25} /> 
                                    <p className="block">10 Attendes</p>
                                </div>
                                <p className="block lg:mx-4 font-normal italic"><span>Posted </span>1 hour ago</p>
                            </div>
                            <div className='flex justify-between my-2 gap-2'>
                                <div className='hover:opacity-80  cursor-pointer duration-300 ease-in-out flex justify-start gap-2' onClick={()=>{setSection('Comments')}}>
                                    <AiOutlineComment size={25} /> 
                                    <p className="block">10 Comments</p>
                                </div>
                            
                                <div className="gap-2 flex text-text_secondary bg-text_secondary_2 px-4 py-2 rounded-lg cursor-pointer hover:opacity-75" onClick={()=>{setShowTicket(!showTicket)}}>
                                    <TiBook size={20} className="mt-1"/> Buy ticket
                                </div>
                            </div> 
                        </div>
                        
                        <div className='flex flex-wrap justify-start gap-2 font-bold text-text_primary my-2'>
                            <p>#music</p>
                            <p>#music</p>
                            <p>#music</p>
                            <p>#music</p>
                            <p>#music</p>
                        </div>
                        <div className="w-1/3 text-xs mx-auto px-2 py-2 text-secondary animate-bounce absolute left-0 right-0 bottom-28 bg-text_secondary_2 text-center rounded-lg cursor-pointer bg-opacity-20 lg:hidden" onClick={()=>{setSection("Details")}}>
                            View details
                        </div>
                    </div>
                    {showTicket&&
                    <div className="grid gap-2 w-full mb-4 absolute px-4 top-0 bg-secondary bg-opacity-40 min-h-screen max-h-screen overflow-y-auto">
                        <div className='max-w-sm w-full mx-auto bg-secondary h-96 overflow-y-auto my-auto px-4 rounded-l-lg'>
                            <div className='sticky top-0 z-10 flex justify-between bg-secondary py-4 text-btn_primary '>
                                <h3 className="font-bold opacity-70 w-full">Tickets package</h3>
                                <div className="cursor-pointer hover:font-bold transition duration-150 ease-in-out" onClick={()=>setShowTicket(!showTicket)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                           <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                                <label className='text-sm text-text_primary font-bold capitalize'>REGULAR</label>
                                <div className='flex justify-between text-text_secondary'>
                                    <h3 className="text-lg font-medium">5000 RF</h3>
                                    <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-sm py-1'>Buy</button>
                                </div>
                            </div>
                            <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                                <label className='text-sm text-text_primary font-bold capitalize'>VIP</label>
                                <div className='flex justify-between text-text_secondary'>
                                    <h3 className="text-lg font-medium">50000 RF</h3>
                                    <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-sm py-1'>Buy</button>
                                </div>
                            </div>
                            <div className='border border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                                <label className='text-sm text-text_primary font-bold capitalize'>VVIP Table of 6</label>
                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-medium">300000 RF</h3>
                                    <button className=' px-4 rounded-lg bg-btn_primary  hover:bg-text_primary text-secondary border border-btn_primary transition-all duration-150 text-sm py-1'>Buy</button>
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                    }                      
                </div>
            </div>
            <div className={`w-full lg:relative transform duration-1000 delay-300 ease-in-out absolute top-0 left-0 right-0 z-40 lg:translate-x-0 ${section==='Comments'||section==='Attendes'||section==='Details'? 'translate-x-0':'translate-x-full'}`}>
                <div className={`px-2 absolute top-0 left-0 right-0 bg-secondary overflow-y-auto max-h-screen min-h-screen text-text_secondary pb-12 transform duration-1000 delay-300 ease-in-out lg:translate-x-0 ${section==="Details"?'translate-x-0':'translate-x-full'}`}>
                    <div className='py-4 sticky top-0 z-10 bg-secondary flex justify-start gap-2 text-btn_primary'>
                        <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>setSection('')}>
                            <BiArrowBack size={25}/>
                        </div>
                        <h3 className="font-bold  opacity-70 w-full">Descriptions</h3>
                    </div>
                    <div className="w-full mb-4">
                        <div className='w-full'>
                            <div className='flex justify-start gap-2 py-2'>
                                <VscCalendar className=' font-normal' size={20}/>
                                <div className='lg:flex justify-start gap-2'>
                                    <div className='lg:w-24 w-full'>
                                        <label className='text-sm font-normal mx-auto capitalize'>Start Date:</label>
                                    </div>
                                    <div className='flex justify-between py-1'>
                                        <h3 className="text-sm font-medium mx-auto ">Saturday,04 March 2023</h3>
                                        <p className="text-sm font-medium">18:00 PM</p>

                                    </div>
                                </div>
                                

                            </div>

                            <div className='flex justify-start gap-2 py-2'>
                                <VscCalendar className=' font-normal  ' size={20}/>
                                <div className='lg:flex justify-start gap-2'>
                                    <div className='lg:w-24 w-full'>
                                        <label className='text-sm font-normal mx-auto capitalize'>End Date:</label>
                                    </div>                            
                                    <div className='flex justify-between py-1'>
                                        <h3 className="text-sm font-medium mx-auto ">Saturday,04 March 2023</h3>
                                        <p className="text-sm font-medium  mx-4">23:00 PM</p>

                                    </div>
                                </div>
                                

                            </div>

                            <div className='flex justify-start gap-2 py-2'>
                                <TfiLocationPin className=' font-normal  ' size={20}/>
                                <div className='lg:flex justify-start gap-2'>
                                    <div className='lg:w-24 w-full'>
                                        <label className='text-sm font-normal mx-auto capitalize'>Location:</label>
                                    </div>
                                    <h3 className="text-sm font-medium mx-auto py-1">Kigali Rwanda</h3>
                                </div>
                                

                            </div>
                            
                            <div className='flex justify-start gap-2 py-2'>
                                <MdStadium className=' font-normal ' size={20}/>
                                <div className='lg:flex justify-start gap-2 flex-nowrap'>
                                    <div className='lg:w-24 w-full'>
                                        <label className='text-sm font-normal mx-auto capitalize'>Venue:</label>
                                    </div>
                                    <h3 className="text-sm font-medium word-wrap mx-auto py-1">Kigali Conference and Exhibition Village (Camp Kigali)</h3>
                                </div>
                                
                            </div>

                            <div className='flex justify-start gap-2 py-2'>
                                <VscLayoutStatusbar  className=' font-normal ' size={20}/>
                                <div className='lg:flex justify-start gap-2'>
                                    <div className='lg:w-24 w-full'>
                                        <label className='text-sm font-normal mx-auto capitalize'>Status:</label>
                                    </div>
                                    <div className='lg:flex justify-between sm:block py-1'>
                                        <h3 className="text-sm font-medium mx-auto py-1 ">Upcoming</h3>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <QRCodeCanvas
                            id="qrCode"
                            value={qrData}
                            level={"H"}
                            size={300}
                            fgColor="#6b7280"
                            className="w-1/2 mx-auto left-0 right-0 top-0 bottom-0 rounded-lg"
                            />
                    </div>
                    <div>
                        <h1 className="text-md font-medium mx-auto py-1 ">Plot Descriptions</h1>
                        <div>
                            <p>
                                Elit mollit eu deserunt aliquip et dolor anim non enim. Consectetur aute minim voluptate deserunt ullamco labore officia nulla fugiat qui ex reprehenderit. Est nisi elit in laborum eu voluptate amet ipsum adipisicing sit proident mollit quis. Adipisicing incididunt elit quis labore excepteur. Velit non excepteur consequat commodo nulla excepteur quis ex magna tempor eu quis consectetur sit. Eiusmod deserunt exercitation consectetur aliquip.Dolor qui fugiat incididunt magna eu adipisicing do. Sit culpa veniam minim non laborum fugiat officia velit do ad. Cupidatat et occaecat proident magna anim consectetur amet officia aliqua nisi mollit. Officia dolor occaecat proident cillum dolore incididunt ut exercitation culpa ut officia sit adipisicing eiusmod. Exercitation qui amet sit tempor mollit ex reprehenderit officia elit cillum in non. Qui ut tempor mollit amet commodo deserunt mollit nisi. Consequat voluptate aliqua culpa eu fugiat.

                                Velit minim ex nisi magna dolor voluptate magna magna veniam culpa commodo dolore sunt ea. Dolore officia labore duis pariatur in laborum eu aliqua. Anim incididunt nulla magna voluptate sint quis. Elit incididunt labore consequat laborum qui ut ut labore sunt irure.

                                Aliqua exercitation enim veniam cupidatat aliquip. Quis esse duis nisi nulla. Duis culpa ipsum eu est velit ipsum incididunt non elit minim aliqua deserunt. Velit dolore ea duis veniam labore velit tempor officia mollit dolor exercitation deserunt laborum. Aute est ut cupidatat mollit eu do pariatur voluptate enim esse. Sit cillum reprehenderit culpa esse id velit consectetur aliqua sint do velit ex. Eiusmod adipisicing deserunt cillum magna ullamco duis minim irure cupidatat nisi exercitation exercitation.

                                Exercitation consectetur pariatur enim ea sit id minim. Ad in in Lorem est ullamco laborum minim adipisicing proident excepteur enim. Do excepteur non minim nisi et proident.

                            </p>
                        </div>
                    </div>
                </div>
                <Comments setSection={setSection} section={section}/>
                <Attendes setSection={setSection} section={section}/>
            </div>
            





        </div>
    </Layout>

  )
}
