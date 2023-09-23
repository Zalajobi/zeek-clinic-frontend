import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  AppointmentTableData,
  AppointmentTableRowData,
} from '../../typeSpec/admin';

export const AppointmentAndEventsTableColumn = () => {
  const columnItem = [
    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('name')}>
            Name
          </span>
        </Fragment>
      ),
      accessor: 'name',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('date and time')}>
            Date and Time
          </span>
        </Fragment>
      ),
      accessor: 'date',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('age')}>
            Age
          </span>
        </Fragment>
      ),
      accessor: 'age',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('gender')}>
            Gender
          </span>
        </Fragment>
      ),
      accessor: 'phone',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('Appointment For')}>
            Appointment For
          </span>
        </Fragment>
      ),
      accessor: 'for',
    },
  ];

  return columnItem;
};

export const AppointmentAndEventsTableRowData = (
  data: AppointmentTableData[]
) => {
  const rowItems: AppointmentTableRowData[] = [];

  data?.map((item: AppointmentTableData, idx: number) => {
    rowItems.push({
      name: (
        <Link
          to={`#`}
          className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>
            {item?.title} {item.first_name} {item?.last_name}
          </b>
        </Link>
      ),

      date: <>{item?.date}</>,

      age: <>{item?.age}</>,

      phone: <>{item?.phone}</>,

      for: <>{item?.for}</>,

      action: <>{item?.id}</>,
    });
  });

  return rowItems;
};
