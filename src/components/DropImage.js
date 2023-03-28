import React from 'react'
import { useDropzone } from 'react-dropzone';
import {IoMdPhotos} from 'react-icons/io';

export default function DropImage({onDrop, accept,open}) {
    const {getRootProps,getInputProps,acceptedFiles,isDragActive}=useDropzone({onDrop, accept});
  return (
    <div>
        <div {...getRootProps({className:"dropzone border rounded-lg border-dashed py-24 px-4 h-72 w-11/12 mx-auto cursor-pointer transition-all duration-1000 ease-in"})} >
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center py-4 block text-text_secondary">
                <IoMdPhotos size={30} className="mx-auto"/>
                {isDragActive?(
                    <p className="dropzone-content font-bold text-md capitalize">
                        Release photo/video
                    </p>
                ):(
                    <p className="dropzone-content font-bold text-md capitalize">
                        Add photo/video
                    </p>
                )}
                
            </div>
        </div>
    </div>
  )
}
