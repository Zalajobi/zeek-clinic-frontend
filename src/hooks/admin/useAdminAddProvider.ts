import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import {
  axiosGetRequestUserService,
  axiosPostRequestUserService,
} from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  AdminCreateProviderResponseData,
  AccountServiceApiResponse,
} from '@typeSpec/apiResponses';
import {
  AdminAddProviderInput,
  AllCountries,
} from '@typeSpec/superadmin/formTypes';

export const useAdminAddProvider = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();

  // State for Input fields
  const [profilePic, setProfilePic] = useState('');
  const [country, setCountry] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [departments, setDepartments] = useState<SelectInputFieldProps[]>([]);
  const [roles, setRoles] = useState<SelectInputFieldProps[]>([]);
  const [serviceArea, setServiceArea] = useState<SelectInputFieldProps[]>([]);
  const [units, setUnits] = useState<SelectInputFieldProps[]>([]);
  const [countryCode, setCountryCode] = useState<string>('');

  useEffect(() => {
    const getAddProviderData = async () => {
      let countriesUpdate: SelectInputFieldProps[] = [],
        temporaryDeptStore: SelectInputFieldProps[] = [],
        temporaryRoleStore: SelectInputFieldProps[] = [],
        temporaryServiceAreaStore: SelectInputFieldProps[] = [],
        temporaryUnitStore: SelectInputFieldProps[] = [];

      Country.getAllCountries().map((country) => {
        return countriesUpdate.push({
          value: country.isoCode,
          placeholder: country.name,
        });
      });
      setAllCountries(countriesUpdate);

      const response = (await axiosGetRequestUserService(
        `/admin/provider/create-new/roles-departments-areas-units/${siteId}`
      )) as AccountServiceApiResponse;

      if (response.success) {
        const data = response.data as AdminCreateProviderResponseData;

        data.departments.map((item) => {
          return temporaryDeptStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.roles.map((item) => {
          return temporaryRoleStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.serviceAreas.map((item) => {
          return temporaryServiceAreaStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.units.map((item) => {
          return temporaryUnitStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        setDepartments(temporaryDeptStore);
        setRoles(temporaryRoleStore);
        setServiceArea(temporaryServiceAreaStore);
        setUnits(temporaryUnitStore);
      }
    };

    getAddProviderData().catch((err) => {});
  }, [siteId]);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      return countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(value);
  };

  const onSubmit = async (data: AdminAddProviderInput) => {
    const addAdminData = {
      ...data,
      country,
      phone: `+${phoneCode}${data.phone}`,
      siteId,
      profilePic,
    };

    const response = (await axiosPostRequestUserService(
      `account/providers/admin/create-new/provider`,
      addAdminData
    )) as AccountServiceApiResponse;

    if (response.success) {
      toast.success(response.message);
      setTimeout(() => {
        navigate('/admin');
      }, 3000);
    } else {
      toast.error(response.message);
    }
  };

  return {
    // Values
    profilePic,
    departments,
    allCountries,
    allCountryStates,
    phoneCode,
    roles,
    serviceArea,
    units,
    countryCode,

    // Functions
    setProfilePic,
    onSubmit,
    onUpdateCountry,
  };
};

export default useAdminAddProvider;
