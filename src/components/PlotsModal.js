import React, { useEffect } from 'react';
import { useCallback } from 'react';
import DropImage from './DropImage';
import ImageGrid from './ImageGrid';
import cuid from 'cuid';
import {AiOutlineSend} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import Picker from './EmojiPicker'
import Map from './Map'
import {TiBook} from 'react-icons/ti';
import {BiArrowBack} from 'react-icons/bi';
import {BsChevronCompactDown} from 'react-icons/bs'
import DateTimePicker from 'react-datetime-picker';
import {GrFormClose} from 'react-icons/gr'
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } // 

export default function PlotsModal(props) {
    const [images,setImages]=React.useState([]);
    const [section,setSection]=React.useState('post')
    const [openTicketsDropdown,setOpenTicketsDropdown]=React.useState(false)
    const [value, onChange] = React.useState(new Date());

    const onDrop=useCallback((acceptedFiles)=>{
        acceptedFiles.map((file)=>{
            const reader=new FileReader();

            reader.onload=function(e){
                setImages((previousState)=>[
                    ...previousState,
                    {id:cuid(),src:e.target.result},
                ]);
            };

            reader.readAsDataURL(file);
            return file;
        })
    },[])
  return (
    <div className="py-4 bg-secondary transition delay-1000 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 bg-opacity-80" id="modal">
        <div role="alert" className="container relative mx-auto my-2 lg:w-11/12 md:w-2/3 sm:w-full max-w-lg bg-secondary px-4 py-3 rounded-lg shadow-lg drop-shadow-lg min-h-full">
            {section==='post'&&
                <>
                <div className='sticky '>
                    <div className=' flex justify-between text-text_secondary'>
                        <div className="w-full">
                            <h1 className=" font-lg font-bold tracking-normal leading-tight mb-4 text-center">Create plot</h1>
                        </div>
                        <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>props.setOpenModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex justify-start gap-2 mt-2 relative">
                            <div className="h-12 rounded-full w-12 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                            <div className="block">
                                <p className="text-md font-bold text-text_secondary">IG</p>
                                <p className="text-sm font-medium text-text_secondary">Anyone</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-2 px-4 bg-text_secondary_2 h-8 py-1 rounded-2xl bg-opacity-30 text-sm cursor-pointer hover:text-text_secondary" onClick={()=>setSection("Map")}>
                            <GoLocation size={11} className="my-1"/>
                            <p>Add plot location</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="relative py-8 rounded h-96 overscroll-y-contain overflow-y-scroll">
                    <div className="py-2 px-4 rounded-t-lg dark:bg-gray-800">
                        <label for="comment" className="sr-only">Plot description</label>
                        <textarea id="comment" rows="4" className="px-2 w-full text-sm text-text_secondary drop-shadow bg-secondary border-0 " placeholder="Describe your plot..." required></textarea>
                    </div>
                    {images.length===0?(<DropImage onDrop={onDrop} accept={"image/*"}/>):(<ImageGrid images={images} setImages={setImages}/>)}

                    <div className="block w-full my-4">
                        <label for="Title" className="text-text_secondary font-bold text-lg">Ticket Packages</label>
                        <div className="lg:grid lg:grid-cols-2 gap-2 w-full mx-auto my-4 pr-2">
                            <div className='border border-1 border-text_secondary_2 px-2 py-2 rounded-lg my-2'>
                                <label className='text-xs font-bold text-text_primary dark:text-gray-400 uppercase'>REGULAR</label>
                                <div className='flex justify-between'>
                                    <h3 className="text-lg font-medium text-text_secondary">5000 RF</h3>
                                    <button className=' px-4 rounded-lg text-text_secondary border border-text_secondary_2 hover:font-bold  transition-all duration-150 text-xs py-1'>Remove Ticket</button>
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="block w-full my-4">
                        <label for="Title" className="text-text_secondary font-bold text-lg">Date & Time</label>
                        <div className="lg:grid lg:grid-cols-2 gap-1 w-full mx-auto my-4 pr-2">
                            <div className='px-2 py-2 rounded-lg my-2'>
                                <label className='text-xs font-bold text-text_primary dark:text-gray-400 uppercase'>From</label>
                                <div className='flex justify-between'>
                                    <DateTimePicker 
                                    dayPlaceholder="dd" 
                                    monthPlaceholder="mm" 
                                    yearPlaceholder="yy" 
                                    onChange={onChange} value={value} 
                                    calendarClassName="border-0 rounded-lg text-text_secondary" 
                                    className="text-text_secondary rounded-lg" 
                                    calendarIcon={false} 
                                    clearIcon={<GrFormClose/>}
                                   />
                                </div>
                            </div>
                            <div className='px-2 py-2 rounded-lg my-2'>
                                <label className='text-xs font-bold text-text_primary dark:text-gray-400 uppercase'>From</label>
                                <div className='flex justify-between'>
                                    <DateTimePicker 
                                    dayPlaceholder="dd" 
                                    monthPlaceholder="mm" 
                                    yearPlaceholder="yy" 
                                    onChange={onChange} value={value} 
                                    calendarClassName="border-0 rounded-lg text-text_secondary" 
                                    className="text-text_secondary rounded-lg" 
                                    calendarIcon={false} 
                                    clearIcon={<GrFormClose/>}
                                   />
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
                
                <div className="flex items-center justify-between w-full stick my-2">
                    <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-btn_primary text-secondary rounded-md px-4 py-2 text-sm"><AiOutlineSend size={20}/> </button>
                    <div className="relative flex justify-end gap-2">
                        <button type="button" className="p-2 gap-2 flex text-text_secondary rounded cursor-pointer hover:opacity-75" onClick={()=>{setSection('tickets')}}>
                            <TiBook size={20} className="mt-1"/> Add ticket
                        </button>
                        <button type="button" className="p-2 text-text_secondary rounded cursor-pointer hover:opacity-75" onClick={()=>{setSection('stickers')}}>
                            <BsEmojiSmile size={20}/>
                        </button>
                        
                    </div>
                </div>
                </>
            }

            {section==='stickers'&& <Picker setSection={setSection}/>}

            {section==='Map'&& <Map location={location} setSection={setSection} zoomLevel={17} />}

            {section==='tickets'&& 
                <div className="stickers">
                    <div className=" flex justify-start text-text_secondary">
                        <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>setSection('post')}>
                            <BiArrowBack size={20}/>
                        </div>
                        <div className=' flex justify-between mx-8'>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight text-center mb-4">Create ticket</h1>
                        </div>
                    </div>

                    <form className="rounded-lg drop-shadow py-4 border px-4 w-4/5 mx-auto py-2 my-24 border-dashed border-text_secondary_2">
                        <div className="block w-full mb-4">
                            <label for="Title" className="text-text_secondary font-bold text-lg">Ticket title</label>
                            <input type="text" id="Title" name="title" className="px-2 my-4 w-full rounded-md text-sm text-text_secondary bg-secondary border-1 border-text_secondary_2 " placeholder="Ticket title..." required/>
                        </div>
                        <div className="block w-full mb-4">
                            <div className="flex justify-between">
                                <label for="Title" className="text-text_secondary text-lg font-bold">Ticket Price</label>

                                <div className="flex justify-start gap-2 px-4 bg-text_secondary_2 h-8 py-1 rounded-2xl bg-opacity-30 text-sm cursor-pointer hover:text-text_secondary" onClick={()=>setOpenTicketsDropdown(!openTicketsDropdown)}>
                                    <p>Currency</p>
                                    <BsChevronCompactDown size={20}/>
                                </div>
                                {openTicketsDropdown&&
                                    <div id="dropdown" className="z-10 absolute right-4 mx-8 w-48 my-12 bg-secondary divide-y  divide-gray-100 rounded-lg shadow dark:bg-slate-800">
                                        <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                            <button className="px-3 py-2 w-full text-left">
                                                US Dollars
                                            </button>
                                            <button className="px-3 py-2 w-full text-left">
                                                Rwandan Franc
                                            </button>
                                            <button className="px-3 py-2 w-full text-left">
                                                Euro
                                            </button>
                                            <button className="px-3 py-2 w-full text-left">
                                                Ugandan Shilling
                                            </button>
                                            <button className="px-3 py-2 w-full text-left">
                                                Free
                                            </button>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <input type="number" id="Title" name="title" className="px-2 my-4 w-full rounded-md text-sm text-text_secondary bg-secondary border-1 border-text_secondary_2 " placeholder="Price..." required/>
                        </div>

                        <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-btn_primary text-secondary rounded-md px-4 py-2 text-sm flex gap-2"><TiBook size={20}/> Add ticket </button>
                    </form>

                    
                </div>
            }

        </div>
    </div>
        
  )
}
