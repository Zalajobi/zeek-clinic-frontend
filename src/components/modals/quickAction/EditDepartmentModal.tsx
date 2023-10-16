import React, { Fragment } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { BasicOutlineButton } from '@components/global/CustomButton';

interface EditDepartmentModalProps {
  open: boolean;
  handler: () => void;
  nameOfDepartment: string;
  descriptionPlaceholder: string;
  updateDepartmentInformation: () => void;
  onUpdateDeptName: (value: string) => void;
  onUpdateDeptDescription: (value: string) => void;
}

const EditDepartmentModal = ({
  open,
  handler,
  nameOfDepartment,
  descriptionPlaceholder,
  updateDepartmentInformation,
  onUpdateDeptName,
  onUpdateDeptDescription,
}: EditDepartmentModalProps) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handler}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>
          <div className={`flex items-center gap-3`}>
            <p className={`text-black hover:text-gray-500 decoration-0`}>
              <b className={`font-extrabold`}>Update {nameOfDepartment}</b>
            </p>
          </div>
        </DialogHeader>

        <DialogBody
          divider
          className={`grid gap-4 grid-cols-2 my-2`}>
          <Input
            size="lg"
            onChange={(event) => onUpdateDeptName(event.target.value)}
            placeholder={nameOfDepartment}
            label="Name"
          />

          <Textarea
            label="Description"
            onChange={(event) => onUpdateDeptDescription(event.target.value)}
            placeholder={descriptionPlaceholder}
          />
        </DialogBody>

        <DialogFooter>
          <BasicOutlineButton
            text={`Cancel`}
            click={handler}
            type={`danger`}
            className={`mr-3 min-w-[200px]`}
          />

          <BasicOutlineButton
            text={`Update Department`}
            click={updateDepartmentInformation}
            type={`success`}
            className={`ml-3 min-w-[200px]`}
          />
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default EditDepartmentModal;
