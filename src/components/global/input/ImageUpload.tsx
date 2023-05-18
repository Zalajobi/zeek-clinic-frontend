import React, {ChangeEvent, useState} from "react";
import {uploadProfileImage} from "../../../util/useS3Upload";

const ImageUpload = () => {
  const [previewImageURL, setPreviewImageURL] = useState('');
  const updateImageChange = async (event:ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    console.log(selectedFiles[0])

    const url = await uploadProfileImage(selectedFiles[0],  selectedFiles[0]?.name)
    setPreviewImageURL(url as string)
  }

  return (
    <div className="grid grid-cols-1 space-y-2">
      <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
          <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
            <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files
              here <br/> or <a href="" id="" className="text-blue-600 hover:underline">select an image</a> from your
              computer</p>
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={updateImageChange}/>
        </label>
      </div>
    </div>
  )
}

export default ImageUpload;