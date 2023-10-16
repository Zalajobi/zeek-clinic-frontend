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
  type: 'departments' | 'units' | 'area';
  nameOfDepartment: string;
  descriptionPlaceholder: string;
  open: boolean;
  handler: () => void;
  updateDepartmentInformation: () => void;
  onUpdateDeptName: (value: string) => void;
  onUpdateDeptDescription: (value: string) => void;
  onUpdateEditTotalBeds: (value: number) => void;
  onUpdateEditOccupiedBeds: (value: number) => void;
}

const EditDepartmentModal = ({
  open,
  handler,
  nameOfDepartment,
  descriptionPlaceholder,
  updateDepartmentInformation,
  onUpdateDeptName,
  onUpdateDeptDescription,
  onUpdateEditOccupiedBeds,
  onUpdateEditTotalBeds,
  type,
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

          {type === 'units' && (
            <>
              <Input
                size="lg"
                type={`number`}
                onChange={(event) =>
                  onUpdateEditTotalBeds(Number(event.target.value))
                }
                label="Total Bed(s)"
              />

              <Input
                size="lg"
                type={`number`}
                onChange={(event) =>
                  onUpdateEditOccupiedBeds(Number(event.target.value))
                }
                label="Occupied Bed(s)"
              />
            </>
          )}

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
