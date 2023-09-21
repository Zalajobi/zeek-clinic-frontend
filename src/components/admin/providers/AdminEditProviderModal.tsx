import { CustomBasicModal } from '../../global/dialog/CustomModal';
import { Fragment } from 'react';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../global/CustomButton';
import { Tab } from '@headlessui/react';
import { Typography } from '../../global/dialog/Typography';
import {
  AdminEditGeneratePasswordTab,
  AdminEditMoveProviderTab,
  AdminEditPersonalInformationModalTab,
} from './AdminEditProviderModalTabViews';
import { useForm } from 'react-hook-form';
import {
  AdminEditPersonalInformation,
  AdminEditPersonalInformationSchema,
} from '../../../types/admin/provider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAdminUpdateProviderInformationTabs } from '../../../hooks/admin/useAdminUpdateProviderInformationTabs';

interface AdminEditProviderModalProps {
  name: string;
  currentModal: 'Personal' | 'GeneratePassword' | 'MoveProvider';
  siteId: string;
  updateCurrentModal: (
    value: 'Personal' | 'GeneratePassword' | 'MoveProvider'
  ) => void;
}

const AdminEditProviderModal = ({
  siteId,
  name,
  currentModal,
  updateCurrentModal,
}: AdminEditProviderModalProps) => {
  const {
    // Value
    allCountries,
    allCountryStates,
    countryCode,
    departments,
    roles,
    serviceAreas,
    units,
    // isLoading,
    // error,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
  } = useAdminUpdateProviderInformationTabs(siteId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminEditPersonalInformation>({
    resolver: yupResolver(AdminEditPersonalInformationSchema),
  });

  const views = {
    Personal: (
      <AdminEditPersonalInformationModalTab
        errors={errors}
        register={register}
        allCountries={allCountries}
        allCountryStates={allCountryStates}
        countryCode={countryCode}
        onUpdatePhoneNumber={onUpdatePhoneNumber}
        onUpdateCountry={onUpdateCountry}
      />
    ),
    MoveProvider: <AdminEditMoveProviderTab />,
    GeneratePassword: <AdminEditGeneratePasswordTab />,
  };

  const CurrentView = views[currentModal];

  return (
    <CustomBasicModal
      targetModalId={`editProvider`}
      title={`Edit ${name}`}
      bodyClassName={`px-0 py-0`}
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
      <div className={`grid grid-cols-[25%_75%] gap-4 w-full h-[800px]`}>
        <div className={`w-full h-full border-r-[#e5e7eb] border-r`}>
          <div className={`flex flex-col item-center justify-start px-4`}>
            <Tab.Group>
              <Tab.List
                className={`flex flex-col space-x-1 rounded-xl bg-white p-1`}>
                <Tab
                  className={`w-full rounded-lg py-5 my-2 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    currentModal === 'Personal'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => updateCurrentModal('Personal')}>
                  <Typography
                    text={`Personal Information`}
                    Tag={`p`}
                    weight={500}
                  />
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-5 my-2 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    currentModal === 'MoveProvider'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => updateCurrentModal('MoveProvider')}>
                  <Typography
                    text={`Move Provider`}
                    Tag={`p`}
                    weight={500}
                  />
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-5 my-2 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    currentModal === 'GeneratePassword'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => updateCurrentModal('GeneratePassword')}>
                  <Typography
                    text={`Generate Password`}
                    Tag={`p`}
                    weight={500}
                  />
                </Tab>
              </Tab.List>
            </Tab.Group>
          </div>
        </div>

        {CurrentView}
      </div>
    </CustomBasicModal>
  );
};

export default AdminEditProviderModal;
