import { Fragment } from 'react';
import SuperadminBaseTemplate from '../../components/templates/superadmin/SuperadminBaseTemplate';
import {useOrganizationDetails} from "../../hooks/superadmin/useOrganizationDetails";

const OrganizationSite = () => {

  const {
    // Values
    hospitalId,

  } = useOrganizationDetails()

  return (
    <Fragment>
      <SuperadminBaseTemplate>
        <h1>Site</h1>
      </SuperadminBaseTemplate>
    </Fragment>
  )
}

export default OrganizationSite;