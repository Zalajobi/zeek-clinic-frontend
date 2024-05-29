import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentTableData, AppointmentTableRowData } from '@typeSpec/admin';

export const AppointmentAndEventsTableColumn = () => {
  return [
    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
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
            onClick={() => {}}>
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
            onClick={() => {}}>
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
            onClick={() => {}}>
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
            onClick={() => {}}>
            Appointment For
          </span>
        </Fragment>
      ),
      accessor: 'for',
    },
  ];
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
          key={`${idx}_${item.title}+${item.first_name}+${item.last_name}`}
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

    return;
  });

  return rowItems;
};
