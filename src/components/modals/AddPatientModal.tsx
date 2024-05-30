import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { useAddPatientModal } from '@hooks/modals/useAddPatientModal';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  DepartmentPayload,
  ProviderPayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';
import { useForm } from 'react-hook-form';
import { CreatePatientInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreatePatientInputSchema } from '@typeSpec/forms';

interface AddPatientModalProps {
  handler: () => void;
  open: boolean;
}

const AddPatientModal = ({ handler, open }: AddPatientModalProps) => {
  const providerOptions: SelectInputFieldProps[] = [],
    deptOptions: SelectInputFieldProps[] = [],
    unitOptions: SelectInputFieldProps[] = [],
    serviceAreaOptions: SelectInputFieldProps[] = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePatientInput>({
    resolver: yupResolver(CreatePatientInputSchema),
  });

  const {
    // Values
    providerData,
    providerDataLoading,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,

    // Functions
  } = useAddPatientModal(handler);

  if (!providerDataLoading)
    providerData?.data?.providers?.map((provider: ProviderPayload) => {
      providerOptions.push({
        placeholder: `${provider.title} ${provider?.firstName} ${provider?.lastName}`,
        value: provider?.id,
      });
    });

  if (!departmentsLoading)
    departments?.data?.depts?.map((data: DepartmentPayload) => {
      deptOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });

  if (!unitsLoading)
    units?.data?.units?.map((data: DepartmentPayload) => {
      unitOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });

  if (!serviceAreasLoading)
    serviceAreas?.data?.serviceAreas?.map((data: ServiceAreaPayload) => {
      serviceAreaOptions.push({
        value: data?.id ?? '',
        placeholder: `${data?.name} - ${data?.type}` ?? '',
      });
    });

  return (
    <CustomBasicModal
      title={'Add New Patient'}
      handler={handler}
      size={'xl'}
      className="h-full w-full"
      open={open}
      footer={
        <Fragment>
          <OutlinedButton
            text={`Cancel`}
            type={`danger`}
            click={handler}
          />

          <OutlinedButton
            click={() => console.log('createProvider')}
            text={`Confirm`}
            type={`secondary`}
          />
        </Fragment>
      }>
      <div
        className={`w-full h-full p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%] mb-4 min-h-[900px]`}>
        {/*Image Upload*/}
        <CustomTransparentCard
          className={`w-full h-full max-h- p-4 rounded-2xl max-h-[380px]`}>
          <ImageUpload
            bucketFolder={`/site_image`}
            url={''}
            updateImageUrl={(logoUrl) => {
              console.log(logoUrl);
            }}
            label={`Site Logo`}
          />
        </CustomTransparentCard>
      </div>
    </CustomBasicModal>
  );
};

export default AddPatientModal;
