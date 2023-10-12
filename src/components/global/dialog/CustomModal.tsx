import { Fragment, ReactNode } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

interface CustomBasicModalProps {
  targetModalId: string;
  title: string;
  children: ReactNode;
  footer: ReactNode;
  open: boolean;
  handler: () => void;
  className?: string;
  bodyClassName?: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export const CustomBasicModal = ({
  targetModalId,
  title,
  children,
  open,
  handler,
  size,
  footer,
  className = '',
  bodyClassName = '',
}: CustomBasicModalProps) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handler}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size={size ?? 'lg'}
        className={`h-full w-full overflow-x-hidden max-h-[800px] ${className}`}>
        {/*Modal Header*/}
        <DialogHeader
          className={`sticky top-0 h-[100px] border border-b-gray-300`}>
          <div className="flex w-full flex-shrink-0 items-center justify-between rounded-t-md p-4">
            {/*Modal Title*/}
            <Typography
              className="!font-bolder leading-normal"
              Tag={'h5'}
              text={title}
              size={'xl'}
            />

            {/*Close Button*/}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={handler}
              // data-te-modal-dismiss
              // aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </DialogHeader>

        {/*Modal Body*/}
        <DialogBody className={`h-[600px]`}>
          <div
            className={`relative p-4 h-full overflow-y-auto ${bodyClassName}`}>
            {children}
          </div>
        </DialogBody>

        {/*Modal Footer */}
        <DialogFooter className={`h-[100px]`}>
          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            {footer}
          </div>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
