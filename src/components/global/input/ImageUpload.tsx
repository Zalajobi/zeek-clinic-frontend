import React, {ChangeEvent, useState} from "react";
import {uploadProfileImage} from "../../../util/useS3Upload";
import {ImUpload} from "react-icons/im";
import Dropzone from "react-dropzone";
import { Button, Label } from "flowbite-react";

const ImageUpload = () => {
  const [previewImageURL, setPreviewImageURL] = useState('');

  // const updateImageChange = async (event:ChangeEvent<HTMLInputElement>) => {
  //   const selectedFiles = event.target.files as FileList;
  //   console.log(selectedFiles[0])
  //
  //   const url = await uploadProfileImage(selectedFiles[0],  selectedFiles[0]?.name, '/profile_image')
  //   setPreviewImageURL(url as string)
  // }

  const onDropzoneUpload = async (acceptedFile: any) => {
    console.log(acceptedFile[0])
    const url = await uploadProfileImage(acceptedFile[0], acceptedFile[0]?.name, '/profile_image')
    setPreviewImageURL(url as string)
    console.log(url)
  }

  const acceptedUploadFileType = {
    'image/*': []
  }

  return (
    <Dropzone onDrop={onDropzoneUpload} maxSize={5242880} maxFiles={1} accept={acceptedUploadFileType}>
      {({getRootProps, getInputProps, isDragActive}) => (
        <section>
          <div {...getRootProps()} className="flex items-center justify-center w-full flex-col">

            <div className="mb-2 block">
              <Label
                htmlFor="profile Picture"
                value="Profile Picture"
              />
            </div>
            {!previewImageURL ? (
              <div
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed 
    rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImUpload size={40} className={`my-4`}/>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
                        drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 font-extrabold">Max Size 5MB</p>
                    </div>
                }
              </div>
            ) : (
              <div className={`mt-2 flex flex-col w-full`}>
                <div
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed 
    rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative overflow-hidden w-full`}
                >
                  <input {...getInputProps()} />
                  <img src={previewImageURL} alt={previewImageURL} width={`100%`} height={`100%`}/>
                </div>

                <Button
                  outline={true}
                  gradientDuoTone="greenToBlue"
                  className={`mt-2 min-w-full`}
                >
                  Change Image
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default ImageUpload;