import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Country, State } from "country-state-city";
import {
  AllCountries,
  AllStatesAndCities,
  CreateSiteInput,
} from "../../types/superadmin/formTypes";
import { axiosPostRequest } from "../../lib/axios";
import toast from "react-hot-toast";

export const useCreateSite = (
  reloadPage: () => void,
  close: () => void,
  totalSites: number
) => {
  const navigate = useNavigate();
  const { hospitalId } = useParams();
  const [logo, setLogo] = useState("");
  const [is_private, setIs_private] = useState(false);
  const [has_appointment, setHas_appointment] = useState(false);
  const [has_caregiver, setHas_caregiver] = useState(false);
  const [has_clinical, setHas_clinical] = useState(false);
  const [has_doctor, setHas_doctor] = useState(false);
  const [has_emergency, setHas_emergency] = useState(false);
  const [has_laboratory, setHas_laboratory] = useState(false);
  const [has_medical_supply, setHas_medical_supply] = useState(false);
  const [has_nursing, setHas_nursing] = useState(false);
  const [has_inpatient, setHas_inpatient] = useState(false);
  const [has_outpatient, setHas_outpatient] = useState(false);
  const [has_pharmacy, setHas_pharmacy] = useState(false);
  const [has_physical_therapy, setHas_physical_therapy] = useState(false);
  const [has_procedure, setHas_procedure] = useState(false);
  const [has_radiology, setHas_radiology] = useState(false);
  const [has_unit, setHas_unit] = useState(false);
  const [has_vital, setHas_vital] = useState(false);
  const [has_wallet, setHas_wallet] = useState(false);
  const [phoneCode, setPhoneCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [allCountryStates, setAllCountryStates] = useState<
    AllStatesAndCities[] | null
  >(null);
  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);
  const [country, setCountry] = useState("");

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[]);
  }, [navigate]);

  const onUpdateLogo = (logo: string) => setLogo(logo);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    setAllCountryStates(
      State.getStatesOfCountry(value) as unknown as AllStatesAndCities[]
    );
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  const createNewSite = async (data: CreateSiteInput) => {
    const siteData = {
      ...data,
      totalSites: totalSites,
      phone: `${data.phone}`,
      country,
      logo,
      country_code: countryCode,
      is_private,
      has_appointment,
      has_caregiver,
      has_clinical,
      has_doctor,
      has_emergency,
      has_laboratory,
      has_medical_supply,
      has_nursing,
      has_inpatient,
      has_outpatient,
      has_pharmacy,
      has_physical_therapy,
      has_procedure,
      has_radiology,
      has_unit,
      has_vital,
      has_wallet,
      hospital_id: hospitalId,
    };

    const response = await axiosPostRequest("/account/site/create", siteData);

    if (response.success) {
      toast.success(response.message);
      reloadPage();
      close();
    } else toast.error(response.message);
  };

  return {
    // Values
    logo,
    is_private,
    has_appointment,
    has_caregiver,
    has_clinical,
    has_doctor,
    has_emergency,
    has_laboratory,
    has_medical_supply,
    has_nursing,
    has_inpatient,
    has_outpatient,
    has_pharmacy,
    has_physical_therapy,
    has_procedure,
    has_radiology,
    has_unit,
    has_vital,
    has_wallet,
    allCountries,
    allCountryStates,
    phoneCode,

    // Functions
    onUpdateLogo,
    setIs_private,
    setHas_appointment,
    setHas_caregiver,
    setHas_clinical,
    setHas_doctor,
    setHas_emergency,
    setHas_laboratory,
    setHas_medical_supply,
    setHas_nursing,
    setHas_inpatient,
    setHas_outpatient,
    setHas_pharmacy,
    setHas_physical_therapy,
    setHas_procedure,
    setHas_radiology,
    setHas_unit,
    setHas_vital,
    setHas_wallet,
    createNewSite,
    onUpdateCountry,
  };
};
