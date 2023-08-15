import { CustomBasicModal } from '../../global/dialog/CustomModal';
import { Fragment } from 'react';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../global/CustomButton';

interface AdminEditProviderModalProps {
  name: string;
}

const AdminEditProviderModal = ({ name }: AdminEditProviderModalProps) => {
  return (
    <CustomBasicModal
      targetModalId={`editProvider`}
      title={`Edit ${name}`}
      footer={
        <Fragment>
          <BasicOutlineButton
            click={() => console.log('Edit Provider')}
            text={`Save`}
            type={`secondary`}
            className={`min-w-[200px] mx-5`}
          />

          <ModalButtonOutlineLunch
            data-te-modal-dismiss
            text={`Cancel`}
            type={`danger`}
            className={`min-w-[200px] mx-5`}
          />
        </Fragment>
      }>
      Edit Provider
    </CustomBasicModal>
  );
};

export default AdminEditProviderModal;
