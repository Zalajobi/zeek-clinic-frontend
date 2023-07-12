import { Fragment } from 'react';
import { FaUserMd, FaUserNurse } from 'react-icons/fa';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import CustomCard from '../../components/global/CustomCard';
import Typography from '../../components/global/Typography';
import SummaryCard from '../../components/admin/dashboard/SummaryCard';

const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`w-full flex items-center justify-center`}>
          <div className={`max-w-screen-2xl w-full p-10 flex flex-col`}>
            <div className={`grid grid-cols-1 gap-4 lg:grid-cols-4`}>
              <SummaryCard
                icon={
                  <FaUserMd
                    size={20}
                    color={`#3DC1C5`}
                  />
                }
                boldHeader={'2937'}
                lightHeader={`Doctors`}
                descriptionContext={`31`}
                description={'Active doctor(s)'}
                contextColour={`#3DC1C5`}
                bgColour={`#DDF5F6`}
              />

              <SummaryCard
                icon={
                  <FaUserNurse
                    size={20}
                    color={`#369DFF`}
                  />
                }
                boldHeader={'3798'}
                lightHeader={`Nurses`}
                descriptionContext={`45`}
                description={'Active Nurse(s)'}
                contextColour={`#369DFF`}
                bgColour={`#DEF0FF`}
              />

              <SummaryCard
                icon={
                  <FaUserMd
                    size={20}
                    color={`#F7777B`}
                  />
                }
                boldHeader={'5453'}
                lightHeader={`Visits`}
                descriptionContext={`1291`}
                description={'Patients visits in the last 7 days'}
                contextColour={`#F7777B`}
                bgColour={`#FDE8E9`}
              />

              <SummaryCard
                icon={
                  <FaUserMd
                    size={20}
                    color={`#495058`}
                  />
                }
                boldHeader={'5453'}
                lightHeader={`Admin`}
                descriptionContext={`1291`}
                description={'Active Admin(s)'}
                contextColour={`#495058`}
                bgColour={`#DEE2E6`}
              />
            </div>
          </div>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminDashboard;
