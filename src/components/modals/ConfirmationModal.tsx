import { Fragment } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';

interface ConfirmationModalProps {
  open: boolean;
  handleOpen: () => void;
  handleConfirm: () => void;
  message: string;
}

const ConfirmationModal = ({
  open,
  handleOpen,
  handleConfirm,
  message,
}: ConfirmationModalProps) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handleOpen}
        size={'xs'}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Confirmation</DialogHeader>
        <DialogBody>
          <Typography className={`text-center font-bold text-lg`}>
            {message}
          </Typography>
        </DialogBody>
        <DialogFooter className={`gap-4`}>
          <Button
            onClick={handleOpen}
            className="btn btn-primary"
            color={'red'}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="btn btn-primary"
            color={`green`}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default ConfirmationModal;
