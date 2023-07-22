import { ChangeEvent, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import { axiosGetRequest } from '../../lib/axios';
import { SelectInputFieldProps } from '../../types/common';
import { AdminCreateProviderResponseData } from '../../types/apiResponses';
import {
  AdminAddProviderInput,
  AllCountries,
} from '../../types/superadmin/formTypes';
import input = Simulate.input;
import { prefix } from 'rsuite/utils';

export const useAdminAddProvider = () => {
  const { siteId } = useParams();

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

  useEffect(() => {
    const getAddProviderData = async () => {
      let countriesUpdate: SelectInputFieldProps[] = [],
        temporaryDeptStore: SelectInputFieldProps[] = [],
        temporaryRoleStore: SelectInputFieldProps[] = [],
        temporaryServiceAreaStore: SelectInputFieldProps[] = [],
        temporaryUnitStore: SelectInputFieldProps[] = [];

      Country.getAllCountries().map((country) => {
        countriesUpdate.push({
          value: country.isoCode,
          placeholder: country.name,
        });
      });
      setAllCountries(countriesUpdate);

      const response = await axiosGetRequest(
        `/account/admin/provider/create-new/roles-departments-areas-units/${siteId}`
      );

      if (response.success) {
        const data = response.data as AdminCreateProviderResponseData;

        data.departments.map((item) => {
          temporaryDeptStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.roles.map((item) => {
          temporaryRoleStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.serviceAreas.map((item) => {
          temporaryServiceAreaStore.push({
            value: item?.id,
            placeholder: item?.name,
          });
        });

        data.units.map((item) => {
          temporaryUnitStore.push({
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

    getAddProviderData().catch((err) => {
      console.log(err);
    });
  }, [input]);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
  };

  const onSubmit = async (data: AdminAddProviderInput) => {
    const addAdminData = {
      ...data,
      country,
      phone: `+${phoneCode}${data.phone}`,
    };
    console.log(addAdminData);
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

    // Functions
    setProfilePic,
    onSubmit,
    onUpdateCountry,
  };
};

export default useAdminAddProvider;
