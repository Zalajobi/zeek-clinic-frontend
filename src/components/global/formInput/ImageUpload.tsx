import { ImUpload } from 'react-icons/im';
import Dropzone from 'react-dropzone';
import { uploadProfileImage } from '@util/useS3Upload';
import { BasicFilledButton } from '@components/global/CustomButton';

interface ImageUploadProps {
  bucketFolder: string;
  url: string;
  updateImageUrl: (value: string) => void;
  label?: string;
}

const ImageUpload = ({
  bucketFolder,
  url,
  updateImageUrl,
  label = 'Profile Picture',
}: ImageUploadProps) => {
  const onDropzoneUpload = async (acceptedFile: any) => {
    const url = await uploadProfileImage(
      acceptedFile[0],
      acceptedFile[0]?.name,
      bucketFolder
    );
    updateImageUrl(url as string);
  };

  const acceptedUploadFileType = {
    'image/*': [],
  };

  return (
    <Dropzone
      onDrop={onDropzoneUpload}
      maxSize={5242880}
      maxFiles={1}
      accept={acceptedUploadFileType}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            {...getRootProps()}
            className="flex items-center justify-center w-full flex-col">
            <div className="mb-2 block">
              <label htmlFor="profile Picture">{label}</label>
            </div>
            {!url ? (
              <div
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed 
    rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImUpload
                      size={40}
                      className={`my-4`}
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 font-extrabold">
                      Max Size 5MB
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className={`mt-2 flex flex-col w-full`}>
                <div
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed 
    rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative overflow-hidden w-full`}>
                  <input {...getInputProps()} />
                  <img
                    src={url}
                    alt={url}
                    width={`100%`}
                    height={`100%`}
                  />
                </div>

                <BasicFilledButton
                  text={`Change Image`}
                  className={`mt-2 min-w-full hover:!ring-0`}
                  type={`secondary`}
                />
              </div>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
