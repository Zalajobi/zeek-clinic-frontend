import { Fragment } from 'react';

export const AppointmentAndEventsTable = () => {
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
