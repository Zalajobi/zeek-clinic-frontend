import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { Fragment } from 'react';
import { BasicOutlineButton } from '@components/global/CustomButton';
import { Tab } from '@headlessui/react';
import { Typography } from '@components/global/dialog/Typography';
import {
  AdminEditGeneratePasswordTab,
  AdminEditMoveProviderTab,
  AdminEditProvidersInformationModalTab,
} from '@components/admin/providers/details/AdminEditProviderModalTabViews';
import { useForm } from 'react-hook-form';
import {
  AdminEditProvidersInformation,
  AdminEditProvidersInformationSchema,
} from '@typeSpec/admin/provider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAdminUpdateProviderInformationTabs } from '@hooks/admin/useAdminUpdateProviderInformationTabs';
import { LoadingSpinner } from '@components/global/Toast';
import {
  UserServiceDepartmentResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';

interface AdminEditProviderModalProps {
  name: string;
  fetchData: boolean;
  siteId: string;
  currentModal: 'Personal' | 'GeneratePassword' | 'MoveProvider';
  department: UserServiceDepartmentResponseData[];
  role: UserServiceRoleResponseData[];
  serviceArea: UserServiceServiceAreaResponseData[];
  unit: UserServiceUnitResponseData[];
  updateCurrentModal: (
    value: 'Personal' | 'GeneratePassword' | 'MoveProvider'
  ) => void;
  handler: () => void;
  open: boolean;
}

const AdminEditProviderModal = ({
  name,
  currentModal,
  updateCurrentModal,
  department,
  role,
  serviceArea,
  unit,
  fetchData,
  siteId,
  handler,
  open,
}: AdminEditProviderModalProps) => {
  const {
    // Value
    allCountries,
    allCountryStates,
    country,
    departmentsSelectField,
    rolesSelectField,
    serviceAreasSelectField,
    unitsSelectField,
    tempPassword,
    showLoading,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
    generatePassword,
    onUpdateTempPassword,
    handleUpdateProviderDetails,
  } = useAdminUpdateProviderInformationTabs(
    fetchData,
    siteId,
    department,
    role,
    serviceArea,
    unit
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminEditProvidersInformation>({
    resolver: yupResolver(AdminEditProvidersInformationSchema),
  });

  const views = {
    Personal: (
      <AdminEditProvidersInformationModalTab
        errors={errors}
        register={register}
        allCountries={allCountries}
        allCountryStates={allCountryStates}
        country={country}
        onUpdatePhoneNumber={onUpdatePhoneNumber}
        onUpdateCountry={onUpdateCountry}
      />
    ),
    MoveProvider: (
      <AdminEditMoveProviderTab
        departments={departmentsSelectField}
        roles={rolesSelectField}
        serviceArea={serviceAreasSelectField}
        unit={unitsSelectField}
        errors={errors}
        register={register}
      />
    ),
    GeneratePassword: (
      <AdminEditGeneratePasswordTab
        errors={errors}
        register={register}
        generatePassword={generatePassword}
        password={tempPassword}
        updatePassword={(value) => onUpdateTempPassword(value)}
      />
    ),
  };

  const CurrentView = views[currentModal];

  return (
    <CustomBasicModal
      size={`lg`}
      open={open}
      handler={handler}
      title={`Edit ${name}`}
      bodyClassName={`px-0 py-0`}
      footer={
        <Fragment>
          <BasicOutlineButton
            click={handleSubmit(handleUpdateProviderDetails)}
            text={`Save`}
            type={`secondary`}
            className={`min-w-[200px] mx-5`}
          />

          <BasicOutlineButton
            text={`Cancel`}
            type={`danger`}
            className={`min-w-[200px] mx-5`}
            click={handler}
          />
        </Fragment>
      }>
      <LoadingSpinner
        message={`Updating Provider Details...`}
        loading={showLoading}
      />

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
