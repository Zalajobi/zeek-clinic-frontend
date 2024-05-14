import { useState } from 'react';
import { SitePayload } from '@typeSpec/payloads';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  axiosGetRequestUserService,
  axiosPutRequestUserService,
} from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SelectInputFieldProps } from '@typeSpec/common';

export const useEditSite = (siteId?: string, handleOpen?: () => void) => {
  const queryClient = useQueryClient();
  const [site, setSite] = useState<SitePayload>();
  const [logoUrl, setLogoUrl] = useState('');

  const siteStatus: SelectInputFieldProps[] = [
    {
      value: 'ACTIVE',
      placeholder: 'Active',
    },
    {
      value: 'PENDING',
      placeholder: 'Pending',
    },
    {
      value: 'CLOSED',
      placeholder: 'Closed',
    },
    {
      value: 'DEACTIVATED',
      placeholder: 'Suspended',
    },
  ];

  // Get Site Details
  const { data: siteData, isLoading: siteLoading } = useQuery({
    queryKey: ['getSideDetails'],
    queryFn: async () => {
      try {
        if (siteId) {
          return await axiosGetRequestUserService(`/site/${siteId}/details`);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Edit Site Mutation
  const { mutate: editSiteMutation } = useMutation(
    async () => {
      try {
        return await axiosPutRequestUserService(`/site/update/${siteId}`, site);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating Site', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          setSite({});
          toast.success(result?.message);
        } else toast.error('Something Went Wrong');

        queryClient.resetQueries('getSiteTableData');
      },
    }
  );

  const onUpdateSiteName = (name: string) => {
    setSite({
      ...site,
      name,
    });
  };

  const onUpdateSiteLogo = (logo: string) => {
    setSite({
      ...site,
      logo,
    });
    setLogoUrl(logo);
  };

  const onUpdateSiteEmail = (email: string) => {
    setSite({
      ...site,
      email,
    });
  };

  const onUpdateSitePhone = (phone: string) => {
    setSite({
      ...site,
      phone,
    });
  };

  const isSitePrivate = (isPrivate: boolean) => {
    setSite({
      ...site,
      is_private: isPrivate,
    });
  };

  const hasAppointment = (hasAppointment: boolean) => {
    setSite({
      ...site,
      has_appointment: hasAppointment,
    });
  };

  const hasCareGiver = (hasCareGiver: boolean) => {
    setSite({
      ...site,
      has_caregiver: hasCareGiver,
    });
  };

  const hasClinical = (hasClinical: boolean) => {
    setSite({
      ...site,
      has_clinical: hasClinical,
    });
  };

  const hasDoctor = (hasDoctors: boolean) => {
    setSite({
      ...site,
      has_doctor: hasDoctors,
    });
  };

  const hasEmergency = (hasEmergency: boolean) => {
    setSite({
      ...site,
      has_emergency: hasEmergency,
    });
  };

  const hasLaboratory = (hasLaboratory: boolean) => {
    setSite({
      ...site,
      has_laboratory: hasLaboratory,
    });
  };

  const hasMedicalSupply = (hasMedicalSupply: boolean) => {
    setSite({
      ...site,
      has_medical_supply: hasMedicalSupply,
    });
  };

  const hasNursing = (hasNursing: boolean) => {
    setSite({
      ...site,
      has_nursing: hasNursing,
    });
  };

  const hasInPatient = (hasInPatient: boolean) => {
    setSite({
      ...site,
      has_inpatient: hasInPatient,
    });
  };

  const hasOutPatient = (hasOutPatient: boolean) => {
    setSite({
      ...site,
      has_outpatient: hasOutPatient,
    });
  };

  const hasPharmacy = (hasPharmacy: boolean) => {
    setSite({
      ...site,
      has_pharmacy: hasPharmacy,
    });
  };

  const hasPhysicalTherapy = (hasPhysicalTherapy: boolean) => {
    setSite({
      ...site,
      has_physical_therapy: hasPhysicalTherapy,
    });
  };

  const hasProcedure = (hasProcedure: boolean) => {
    setSite({
      ...site,
      has_procedure: hasProcedure,
    });
  };

  const hasRadiology = (hasRadiology: boolean) => {
    setSite({
      ...site,
      has_radiology: hasRadiology,
    });
  };

  const hasUnit = (hasUnit: boolean) => {
    setSite({
      ...site,
      has_unit: hasUnit,
    });
  };

  const hasVital = (hasVital: boolean) => {
    setSite({
      ...site,
      has_vital: hasVital,
    });
  };

  const hasWallet = (hasWallet: boolean) => {
    setSite({
      ...site,
      has_wallet: hasWallet,
    });
  };

  const onUpdateSiteStatus = (
    status: 'ACTIVE' | 'CLOSED' | 'PENDING' | 'DEACTIVATED'
  ) => {
    setSite({
      ...site,
      status,
    });
  };

  const updateSite = () => {
    if (handleOpen) handleOpen();
    editSiteMutation();
  };

  return {
    // Values
    siteData,
    siteLoading,
    logoUrl,
    siteStatus,

    // Functions
    onUpdateSiteName,
    onUpdateSiteLogo,
    onUpdateSiteEmail,
    onUpdateSitePhone,
    isSitePrivate,
    hasAppointment,
    hasCareGiver,
    hasClinical,
    hasDoctor,
    hasEmergency,
    hasLaboratory,
    hasMedicalSupply,
    hasNursing,
    hasInPatient,
    hasOutPatient,
    hasPharmacy,
    hasPhysicalTherapy,
    hasProcedure,
    hasRadiology,
    hasUnit,
    hasVital,
    hasWallet,
    onUpdateSiteStatus,
    updateSite,
  };
};
