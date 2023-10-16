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

interface AddNewDeptServiceAreaModal {
  name: string;
  open: boolean;
  handler: () => void;
  updateName: (value: string) => void;
  updateDescription: (value: string) => void;
  submit: () => void;
}

export const AddNewDeptServiceAreaModal = ({
  name,
  handler,
  open,
  updateName,
  updateDescription,
  submit,
}: AddNewDeptServiceAreaModal) => {
  return (
    <Fragment>
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
                <b className={`font-extrabold`}>Create New {name}</b>
              </p>
            </div>
          </DialogHeader>

          <DialogBody
            divider
            className={`grid gap-4 grid-cols-2 my-2`}>
            <Input
              size="lg"
              onChange={(event) => updateName(event.target.value)}
              label="Name"
            />

            <Textarea
              label="Description"
              onChange={(event) => updateDescription(event.target.value)}
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
              text={`Create ${name}`}
              click={submit}
              type={`success`}
              className={`ml-3 min-w-[200px]`}
            />
          </DialogFooter>
        </Dialog>
      </Fragment>
    </Fragment>
  );
};
