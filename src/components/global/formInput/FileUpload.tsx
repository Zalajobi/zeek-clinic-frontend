import { uploadProfileImage } from '@util/useS3Upload';
import Dropzone from 'react-dropzone';
import * as XLSX from 'xlsx';
import { FilledButton } from '@components/global/CustomButton';
import { UploadIcon } from '@components/global/GlobalIcons';
import { Fragment, useState } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import { HiChevronUpDown } from 'react-icons/hi2';
import Status from '@components/global/Status';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from '@material-tailwind/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { formatPhoneNumber } from '@util/index';

interface ImageUploadProps {
  bucketFolder: string;
  url: string;
  updateImageUrl: (value: string) => void;
  label?: string;
}

export const ImageUpload = ({
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
                    <UploadIcon
                      size={40}
                      className={`my-4`}
                      color="black"
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
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative overflow-hidden`}>
                  <input {...getInputProps()} />
                  <img
                    src={url}
                    alt={url}
                    width={`100%`}
                    height={`100%`}
                  />
                </div>

                <FilledButton
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

interface ExcelFileUploadProps {
  processedData: (data: any[]) => void;
}

export const ExcelFileUpload = ({ processedData }: ExcelFileUploadProps) => {
  const [uploaded, setUploaded] = useState(false);
  const [headers, setHeaders] = useState<string[]>([]);
  const [jsonData, setJsonData] = useState<any[]>([]);

  const onDropzoneUpload = async (acceptedFile: any) => {
    const file = acceptedFile[0];
    setUploaded(!uploaded);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData: any[] = XLSX.utils.sheet_to_json(sheet);
      const fileHeaders = Object.keys(sheetData[0]);
      setHeaders(
        fileHeaders.map((header) => {
          return header;
        })
      );
      setJsonData(sheetData);
      console.log(sheetData);
      processedData(sheetData);
    };
    reader.readAsBinaryString(file);
  };

  const acceptedUploadFileType = {
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
    'application/vnd.ms-excel': [],
    'text/csv': [],
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
              <label htmlFor="profile Picture">Upload Document</label>
            </div>
            {!uploaded ? (
              <div
                className={`flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed 
    rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
    dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadIcon
                      size={40}
                      className={`my-4`}
                      color="black"
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      CSV, XLXS, XLS or XLTX
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
                  className={`flex flex-col items-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg 
                  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 px-4 
                  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative overflow-scroll`}>
                  <input {...getInputProps()} />
                  <table className={`w-full min-w-max table-auto text-left`}>
                    <thead>
                      <tr>
                        {headers.map((item, index) => (
                          <th
                            key={`${item}_${index}`}
                            className={`cursor-pointer border-y bg-ds-gray-100 p-4 transition-colors hover:bg-blue-gray-50`}>
                            <Typography
                              className={
                                'flex items-center font-inter text-xs font-bold text-description justify-between gap-2 leading-none opacity-70'
                              }
                              Tag={'p'}
                              text={item}
                            />
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {jsonData.map((item, index) => (
                        <tr
                          key={`${index}__${index}`}
                          className={`border-y`}>
                          {headers.map((column, indexNum) => (
                            <Fragment key={`${column}_${indexNum}`}>
                              <td
                                className={`whitespace-nowrap py-2 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[200px] overflow-hidden truncate mx-2`}>
                                {item[column]}
                              </td>
                            </Fragment>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <FilledButton
                  text={`Change Document`}
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
