import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {axiosGetRequest} from "../../lib/axios";
import toast from "react-hot-toast";
import { HospitalOrganizationData } from "../../types/superadmin";

export const useOrganizationDetails = () => {
  const { hospitalId } = useParams();
  const [organization, setOrganization] = useState<HospitalOrganizationData>();
  const [activeTabs, setActiveTabs] = useState<'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE'>('ALL');

  useEffect(() => {
    const getData = async () => {
      const response = await axiosGetRequest('/account/hospital/details', {
        id: hospitalId
      })

      if (response.success) {
        console.log(response.data)
        setOrganization(response.data.hospital as HospitalOrganizationData)
        // console.log(response.data.hospital)
        // console.log(response.data.sites)
      } else {
        toast.error(response.mesage)
      }
    }

    getData()
      .catch(err => {
        toast.error('Response')
      })
  }, [hospitalId]);

  const onUpdateActiveTab = async (tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE') => {
    setActiveTabs(tab)
    console.log(tab)
  }

  return {
    // Values
    hospitalId,
    organization,
    activeTabs,

    // Functions
    onUpdateActiveTab,
  }
}