import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {IoMdPhotos} from 'react-icons/io';
import {BiArrowBack} from 'react-icons/bi';
import { AiOutlineHeart,AiOutlineComment,AiFillHeart,AiOutlineFieldTime} from "react-icons/ai";


export default function Comments(props) {
    const [like,setLike]=React.useState(false);

  return (
    <>
        <div className={`px-4 min-h-screen max-h-screen overflow-y-auto text-text_secondary lg:block transform duration-1000 delay-300 ease-in-out bg-secondary ${props.section=="Comments"?'translate-x-0':'translate-x-full'}`}>
            <div className='py-4 sticky top-0 z-10 bg-secondary flex justify-start gap-2 text-btn_primary'>
                <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>props.setSection('')}>
                    <BiArrowBack size={25}/>
                </div>
                <h3 className="font-bold  opacity-70 w-full">Comments</h3>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>

            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>

            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>

            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>

            <div >
                <div className="flex justify-between w-full relative">
                    <div className="flex justify-start gap-2 mt-2 relative px-2">
                        <div className="h-6 w-6 rounded-full">
                            <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                            className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <p className="font-bold">IRAFASHA Gedeon</p>
                            <p className='font-bold text-text_primary hover:text-opacity-70'>Good</p>
                        </div>
                    </div>
                    <div className="rounded-full block cursor-pointer py-2 text-text_primary absolute right-4" onClick={()=>setLike(!like)}>{like?<AiFillHeart size={20}/>:<AiOutlineHeart size={20}/>}</div>
                </div>
                <div className="flex  justify-start gap-2 px-4 py-2 text-sm">
                    <div>
                        <p>4hrs</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <p>1</p>
                        <p>Like</p>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            
        

            <div className='py-4 grid grid-cols-10 text-text_secondary sticky bottom-0 z-10 bg-secondary bg-opacity-95 w-full'>
                <div className="h-8 w-8 rounded-full">
                    <img src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg"
                    className="w-full h-full object-cover rounded-full"/>
                </div>
                <div className="rounded-t-lg col-span-7 w-full">
                    <label for="comment" className="sr-only">Add comment</label>
                    <textarea id="comment" rows="1" className="px-2 py-2 w-full text-sm text-text_secondary drop-shadow bg-secondary border-0 rounded-lg" placeholder="Add comment" required></textarea>
                </div>
                <div className="flex items-center justify-between col-span-2">
                    <div className="relative lg:flex justify-end mx-2 hidden">
                        <button type="button" className="text-text_secondary rounded cursor-pointer hover:opacity-75">
                            <IoMdPhotos size={20}/>
                        </button>
                        <button type="button" className="p-2 text-text_secondary rounded cursor-pointer hover:opacity-75">
                            <BsEmojiSmile size={20}/>
                        </button>
                        <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-btn_primary text-secondary rounded-md px-4 py-2 text-sm"><AiOutlineSend size={15}/> </button>
                    </div>
                </div>

            </div>
        </div>
        
    </>

  )
}
