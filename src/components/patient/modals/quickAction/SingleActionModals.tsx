import { Dialog, DialogHeader } from '@material-tailwind/react';
import { Fragment } from 'react';

interface MovePatientActionModal {
  handler: () => void;
  open: boolean;
  name: string;
  profile_pic: string;
}

export const MovePatientActionModal = ({
  handler,
  open,
  name,
  profile_pic,
}: MovePatientActionModal) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handler}>
        <DialogHeader>Move {name}</DialogHeader>
      </Dialog>
    </Fragment>
  );
};
