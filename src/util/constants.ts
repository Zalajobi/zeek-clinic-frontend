import { AppointmentTableData } from '@typeSpec/admin';

export const testAppointmentData: AppointmentTableData[] = [
  {
    id: '1',
    title: 'Mr.',
    first_name: 'Zhikrullah',
    last_name: 'Igbalajobi',
    date: '10, Jan 2023: 11:39am',
    age: 26,
    phone: '07053980998',
    for: 'Dermatologist',
  },

  {
    id: '2',
    title: 'Mr.',
    first_name: 'Cameron',
    last_name: 'Diaz',
    date: '20, May 2023, 6:30pm',
    age: 54,
    phone: '07053980998',
    for: 'Dr. Lee',
  },

  {
    id: '3',
    title: 'Mr.',
    first_name: 'Jorge',
    last_name: 'Foreman',
    date: '20, May 2023, 7:30pm',
    age: 76,
    phone: '07053980998',
    for: 'Dr. Gregory',
  },

  {
    id: '4',
    title: 'Mr.',
    first_name: 'Philip',
    last_name: 'Lahm',
    date: '20, May 2023, 8:30pm',
    age: 47,
    phone: '07053980998',
    for: 'Dr. Bernard',
  },

  {
    id: '1',
    title: 'Mr.',
    first_name: 'Nathan',
    last_name: 'Daniels',
    date: '20, May 2023, 9:00pm',
    age: 40,
    phone: '07053980998',
    for: 'Dr. Mitchell',
  },

  {
    id: '1',
    title: 'Mr.',
    first_name: 'Sham',
    last_name: 'Pratt',
    date: '20, May 2023, 6:30pm',
    age: 3,
    phone: '07053980998',
    for: 'Dr. Randall',
  },
];

export const pieChard3dOptions = {
  pieHole: 0.4,
  is3D: true,
  legend: {
    position: 'top',
    alignment: 'center',
    maxLines: 10,
    textStyle: {
      fontSize: 10,
      bold: true,
      italic: false,
    },
  },
  titlePosition: 'none',
  titleTextStyle: {
    color: '#000000',
  },
  titleFontSize: 20,
  colors: [
    '#b91c1c',
    '#4d7c0f',
    '#b45309',
    '#0e7490',
    '#a16207',
    '#7e22ce',
    '#374151',
    '#be123c',
    '#4338ca',
    '#ec4899',
  ],
};

export const materialLineChartConfig = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: '',
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ['#020617', '#F44336', '#E91E63', '#9C27B0', '#3975AE'],
      },
    },
    colors: ['#020617', '#F44336', '#E91E63', '#9C27B0', '#3975AE'],
    stroke: {
      lineCap: 'round',
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    yaxis: {
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: 'dark',
    },
  },
};
