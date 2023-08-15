import { Fragment, ReactNode } from 'react';
import { Typography } from './Typography';

interface CustomBasicModalProps {
  targetModalId: string;
  title: string;
  children: ReactNode;
  footer: ReactNode;
}

export const CustomBasicModal = ({
  targetModalId,
  title,
  children,
  footer,
}: CustomBasicModalProps) => {
  return (
    <Fragment>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id={targetModalId}
        tabIndex={-1}
        aria-labelledby={targetModalId}
        aria-modal={true}
        role={`dialog`}
        aria-hidden={true}>
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
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
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/*Modal Body*/}
            <div className="relative p-4 overflow-y-auto">{children}</div>

            {/*Modal Footer */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
