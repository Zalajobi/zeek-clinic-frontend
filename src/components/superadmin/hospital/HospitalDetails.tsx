import { Fragment } from "react";
import {HospitalOrganizationData} from "../../../types/superadmin";
import moment from "moment/moment";
import Status from "../../global/Status";

interface HospitalDetailsProps {
  data: HospitalOrganizationData | null
}

const HospitalDetails = ({data}: HospitalDetailsProps) => {
  return (
    <Fragment>
      <div className={`w-full grid grid-cols-4 items-center gap-4 bg-white px-6 py-9 text-sm font-extrabold rounded-lg`}>
        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Name:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.name}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Email:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.email}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Phone:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.phone}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Created On:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{moment(data?.created_at).format('MMM DD. YYYY')}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Country:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.country}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">State:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.state}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">city:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.city}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Address:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.address}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Zip Code:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.zip_code ?? '---'}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Total Sites:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.site_count}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Active Sites:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.activeSites}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Pending Sites:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.pendingSites}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Closed Sites:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.closedSites}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Suspended Operation Sites:</p>

          <p className="text-ds-primary-700 dark:text-white mt-0 ml-3">{data?.deactivatedSites}</p>
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <p className="text-custom-description dark:text-ds-dark-300 text-description">Status:</p>

          <Status className={`ml-3`} status={data?.status ?? '--'}/>
        </div>
      </div>
    </Fragment>
  )
}

export default HospitalDetails;