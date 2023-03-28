import React from 'react'
import EmojiPicker from 'emoji-picker-react';
import {BiArrowBack} from 'react-icons/bi';

export default function Picker(props){

    return(
        <div className="stickers">
            <div className=" flex justify-start text-text_secondary">
                <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onClick={()=>props.setSection('post')}>
                    <BiArrowBack size={20}/>
                </div>
                <div className=' flex justify-between mx-8'>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight text-center mb-4">Stickers & emojis</h1>
                </div>
            </div>
            
            <EmojiPicker width={"100%"}/> 
        </div>
    )
}