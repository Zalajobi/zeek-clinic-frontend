import { Toast } from 'flowbite-react';
import { FaCheck } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

export const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <FaCheck
          className="h-5 w-5"
          color={`green`}
        />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <Toast.Toggle />
    </Toast>
  );
};

export const ToasterConfig = () => {
  return <Toaster position={`top-right`} />;
};
