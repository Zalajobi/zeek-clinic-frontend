import {useEffect, useState} from "react";
import {AllCountries, AllStatesAndCities, CreateHospitalInput} from "../../types/superadmin/formTypes";
import {Country, State} from "country-state-city";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { axiosPostRequest } from "../../lib/axios";

export const useCreateHospitalModal = () => {
  const navigate = useNavigate();

  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<AllStatesAndCities[] | null>(null);
  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);

  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[])
  }, [navigate]);

  const onUpdateCountry = (value:string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries
    setAllCountryStates(State.getStatesOfCountry(value) as unknown as AllStatesAndCities[])
    setCountry(countryInfo?.name)
    setPhoneCode(countryInfo?.phonecode)
    setCountryCode(countryInfo?.isoCode)
  }

  const createNewOrganization = async (data:CreateHospitalInput) => {
    if (!logo)
      toast.error('Please Upload Organization Logo')
    else {
      const hospitalData = {
        ...data,
        phone: `${data.phone}`,
        country,
        logo,
        country_code: countryCode
      }
      const response = await axiosPostRequest('/account/hospital/create', hospitalData)

      if (response.success)
        toast.success(response.message)
      else
        toast.error(response.message)
    }
  }


  return {
    // Value
    logo,
    allCountries,
    allCountryStates,
    phoneCode,

    // Functions
    createNewOrganization,
    setLogo,
    onUpdateCountry,
  }
}