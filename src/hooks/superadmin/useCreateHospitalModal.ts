import {useEffect, useState} from "react";
import {AllCountries, AllStatesAndCities, CreateHospitalInput} from "../../types/superadmin/formTypes";
import {Country, State} from "country-state-city";
// import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const useCreateHospitalModal = () => {
  const navigate = useNavigate();

  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<AllStatesAndCities[] | null>(null);
  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);

  const [phone, setPhone] = useState<string | number>('');
  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[])
  }, [navigate]);

  const onUpdatePhoneNumber = (value:string) => {
    setPhone(value)
    console.log(value)
  }

  const onUpdateCountry = (value:string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries
    setAllCountryStates(State.getStatesOfCountry(value) as unknown as AllStatesAndCities[])
    console.log(State.getStatesOfCountry(value))
    setCountry(countryInfo?.name)
    setPhoneCode(countryInfo?.phonecode)
    setCountryCode(countryInfo?.isoCode)
  }

  const createNewOrganization = async (data:CreateHospitalInput) => {
    console.log('Create new Organization')
    const hospitalData = {
      ...data,
      phone: `+${phoneCode}${data.phone}`,
      country,
      logo,
      country_code: countryCode
    }

    console.log(hospitalData)
  }


  return {
    // Value
    logo,
    allCountries,
    allCountryStates,
    phoneCode,
    phone,

    // Functions
    createNewOrganization,
    setLogo,
    onUpdateCountry,
    onUpdatePhoneNumber,
  }
}