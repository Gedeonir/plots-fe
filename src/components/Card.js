/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GoLocation } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi";
import { TbShare3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react'
import { useState } from 'react';
import { AiOutlineHeart,AiOutlineComment,AiFillHeart} from "react-icons/ai";
import { BsBookmarkPlus,BsBookmarkDashFill} from "react-icons/bs";

export default function Card(props) {
    const [qrData,setQrData] = useState("");
    const [savedItem,setSavedItem]= useState(false);
    const [like,setLike]=useState(false);

    const qrCodeDecoder=(data)=>{
        setQrData(data)
    }

  return (
        // <Link to="/plots/1/details" className='hover:opacity-80 transition-all duration-700'>
            <div className="mx-2.5 relative h-96  drop-shadow-md shadow-md  rounded-lg mb-4 overflow-hidden text-text_primary">
            
            <div style={{backgroundColor:`${props.bg}`}} className="w-full h-full absolute rounded-lg blur-3xl opacity-50"/>
                
            <QRCodeCanvas
            id="qrCode"
            value={qrData}
            level={"H"}
            size={400}
            className="w-full absolute left-0 right-0 top-0 bottom-0 opacity-5 rounded-lg"
            />
            <div className='flex justify-between py-2'>
                <div className="flex justify-start gap-2 mt-2 relative px-2">
                    <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"></div>
                    <div className="block">
                        <p className="text-md font-bold">IG</p>
                        <p className="text-sm font-medium">12 minutes</p>
                    </div>
                </div>
                <div className="flex justify-start gap-2 my-2 relative px-2 cursor-pointer " onClick={()=>setSavedItem(!savedItem)}>
                    {!savedItem?<BsBookmarkPlus/>:<BsBookmarkDashFill/>}
                </div>
            </div>
            
            <div className='relative mb-2 px-2 h-64 font-bold'>
                <div className='flex justify-end mb-1 rounded-t-2xl'>
                    <p className='text-sm italic '>#music</p>
                    <p className='text-sm italic mx-2 '>#movie</p>

                </div>
                <img
                    className="shrink-0 relative w-full h-56  bg-cover bg-no-repeat bg-center items-center mb-1"
                    src={props.image}/>
                <div className='py-1 my-4 mx-3 rounded-full px-3 text-center bg-secondary opacity-80 absolute top-5 right-3'>
                    <p className='font-bold'>26</p>
                    <p className='text-sm'>Dec</p>
                </div>
                <div className='flex justify-between rounded-b-2xl'>
                    <div className='flex justify-start '>
                        <div className="relative p-1"><GoLocation size={11}/></div>
                        <p className='text-sm text-left italic'>Kigali,Rwanda</p>
                    </div>
                    <div className='flex justify-start '>
                        <div className="h-3 rounded-full relative drop-shadow-lg shadow-lg w-3 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat my-1"></div>
                        <div className="h-3 rounded-full relative drop-shadow-lg shadow-lg left-[-6px] w-3 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSt2dtRA6TOwAHcak91csC79bvaiKGwpF8A&usqp=CAU)] bg-cover bg-center bg-no-repeat my-1"></div>
                        <div className="h-3 rounded-full relative drop-shadow-lg shadow-lg left-[-12px] w-3 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat my-1"></div>
                        <div className="h-3 rounded-full relative drop-shadow-lg shadow-lg left-[-18px] w-3 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSt2dtRA6TOwAHcak91csC79bvaiKGwpF8A&usqp=CAU)] bg-cover bg-center bg-no-repeat my-1"></div>
                        <p className='text-xs text-left italic left-[-16px] relative '>and 100 others</p>
                    </div>
                </div>
            </div>
            <div className='relative left-0 right-0 bottom-0 py-2  w-full flex justify-between'> 
                <div className='flex justify-start px-5 rounded-r-full py-[1px] font-bold'>
                    <div className="rounded-full relative block cursor-pointer" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>} <p className='text-xs text-center'>10.2k</p></div>
                    <div className="rounded-full relative mx-2.5"><AiOutlineComment size={20} /> <p className='text-xs text-center'>10.2k</p></div>
                </div>
                <div className='flex justify-start rounded-lg px-2 text-md text-text_secondary_2 bg-text_primary py-2'>
                    <p className='font-bold'>$5-$5000</p>
                </div>
                <div className='flex justify-start px-5 py-2 rounded-l-full font-bold'>
                    <div className="rounded-full relative mx-2.5"><HiOutlineFlag size={20}/></div>
                    <div className="rounded-full relative"><TbShare3 size={20}/></div>

                </div>
            </div>
            
        
        </div>
    // </Link>
  )
}