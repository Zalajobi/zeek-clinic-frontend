import { Fragment } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { OutlinedButton } from '@components/global/CustomButton';

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
          <OutlinedButton
            text={`Cancel`}
            type={`danger`}
            click={handleOpen}
          />

          <OutlinedButton
            click={handleConfirm}
            text={`Confirm`}
            type={`secondary`}
          />
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default ConfirmationModal;
