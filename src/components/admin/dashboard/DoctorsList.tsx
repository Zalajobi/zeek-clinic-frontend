import { Fragment } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import ListView from '@components/global/views/ListView';

const DoctorsList = () => {
  const dummyDoctorsListData = [
    {
      id: 1,
      title: 'Dr',
      first_name: 'Brandon',
      last_name: 'James',
      role: 'Gynecologist',
      profile_img: '',
    },

    {
      id: 2,
      title: 'Dr',
      first_name: 'Gregory',
      last_name: 'Larson',
      role: 'Cardiologist',
      profile_img: '',
    },

    {
      id: 3,
      title: 'Dr',
      first_name: 'Robert',
      last_name: 'Nune',
      role: 'Orthopedicologist',
      profile_img: '',
    },

    {
      id: 4,
      title: 'Dr',
      first_name: 'Calvin',
      last_name: 'Brown',
      role: 'Neurologist',
      profile_img: '',
    },

    {
      id: 5,
      title: 'Dr',
      first_name: 'Zhikrullah',
      last_name: 'Igbalajobi',
      role: 'NeuroSurgeon',
      profile_img:
        'https://www.voxco.com/wp-content/uploads/2021/04/pasted-image-0-46.png',
    },

    {
      id: 6,
      title: 'Dr',
      first_name: 'Faruq',
      last_name: 'Igbalajobi',
      role: 'Trauma Surgeon',
      profile_img:
        'https://www.simplypsychology.org/wp-content/uploads/Sample-Target-Population.jpeg',
    },
  ];

  return (
    <Fragment>
      <CustomTransparentCard
        className={`w-full flex flex-col items-center justify-center max-h-[400px]`}>
        <div className={`w-full flex justify-center items-center`}>
          <Typography
            text={`Doctors`}
            Tag={`h4`}
            className={`text-[20px] w-full text-start mr-auto`}
          />

          <TypographyWithLink
            text={`View All`}
            to={`#`}
            className={`text-[13px] ml-auto font-bold text-xs min-w-[50px] text-center`}
          />
        </div>

        <div className="w-full h-full flex flex-col space-y-1 -mx-2 overflow-y-auto">
          {dummyDoctorsListData.map((item, index) => {
            return (
              <>
                <ListView Tag={`button`}>
                  <div className={`w-full flex flex-row items-center`}>
                    <div
                      className={`flex items-center justify-center rounded-full p-2 h-12 w-12`}>
                      {item?.profile_img ? (
                        <>
                          <img
                            src={item?.profile_img}
                            className={`w-full h-full overflow-hidden`}
                          />
                        </>
                      ) : (
                        <FaUserAlt
                          size={25}
                          className={`text-gray-500 hover:text-gray-800 mr-2`}
                        />
                      )}
                    </div>

                    <div className={`flex flex-col justify-start mr-auto`}>
                      <Typography
                        text={`${item?.title} ${item.first_name} ${item.last_name}`}
                        Tag={`p`}
                        className={`truncate max-w-[250px] text-left`}
                      />

                      <Typography
                        text={`Reported By ${item.role}`}
                        Tag={'span'}
                        className={`text-left text-[#C4C4C6] text-[12px] text-normal leading truncate max-w-xs`}
                      />
                    </div>
                  </div>
                </ListView>
              </>
            );
          })}
        </div>
      </CustomTransparentCard>
    </Fragment>
  );
};

export default DoctorsList;
