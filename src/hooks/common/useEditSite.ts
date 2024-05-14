import { useState } from 'react';
import { SitePayload } from '@typeSpec/payloads';
import { useQuery } from 'react-query';
import { axiosGetRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SelectInputFieldProps } from '@typeSpec/common';

export const useEditSite = (siteId?: string) => {
  const [contactDetails, setContactDetails] = useState<SitePayload>();
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

  const onUpdateSiteName = (name: string) => {
    setContactDetails({
      ...contactDetails,
      name,
    });
  };

  const onUpdateSiteLogo = (logo: string) => {
    setContactDetails({
      ...contactDetails,
      logo,
    });
    setLogoUrl(logo);
  };

  const onUpdateSiteEmail = (email: string) => {
    setContactDetails({
      ...contactDetails,
      email,
    });
  };

  const onUpdateSitePhone = (phone: string) => {
    setContactDetails({
      ...contactDetails,
      phone,
    });
  };

  const isSitePrivate = (isPrivate: boolean) => {
    setContactDetails({
      ...contactDetails,
      is_private: isPrivate,
    });
  };

  const hasAppointment = (hasAppointment: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_appointment: hasAppointment,
    });
  };

  const hasCareGiver = (hasCareGiver: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_caregiver: hasCareGiver,
    });
  };

  const hasClinical = (hasClinical: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_clinical: hasClinical,
    });
  };

  const hasDoctor = (hasDoctors: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_doctor: hasDoctors,
    });
  };

  const hasEmergency = (hasEmergency: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_emergency: hasEmergency,
    });
  };

  const hasLaboratory = (hasLaboratory: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_laboratory: hasLaboratory,
    });
  };

  const hasMedicalSupply = (hasMedicalSupply: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_medical_supply: hasMedicalSupply,
    });
  };

  const hasNursing = (hasNursing: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_nursing: hasNursing,
    });
  };

  const hasInPatient = (hasInPatient: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_inpatient: hasInPatient,
    });
  };

  const hasOutPatient = (hasOutPatient: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_outpatient: hasOutPatient,
    });
  };

  const hasPharmacy = (hasPharmacy: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_pharmacy: hasPharmacy,
    });
  };

  const hasPhysicalTherapy = (hasPhysicalTherapy: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_physical_therapy: hasPhysicalTherapy,
    });
  };

  const hasProcedure = (hasProcedure: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_procedure: hasProcedure,
    });
  };

  const hasRadiology = (hasRadiology: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_radiology: hasRadiology,
    });
  };

  const hasUnit = (hasUnit: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_unit: hasUnit,
    });
  };

  const hasVital = (hasVital: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_vital: hasVital,
    });
  };

  const hasWallet = (hasWallet: boolean) => {
    setContactDetails({
      ...contactDetails,
      has_wallet: hasWallet,
    });
  };

  const onUpdateSiteStatus = (
    status: 'ACTIVE' | 'CLOSED' | 'PENDING' | 'DEACTIVATED'
  ) => {
    setContactDetails({
      ...contactDetails,
      status,
    });
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
  };
};
