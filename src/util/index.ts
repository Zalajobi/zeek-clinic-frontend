import { SelectInputFieldProps } from '@typeSpec/common';
import { parsePhoneNumber } from 'awesome-phonenumber';
import { CountDataPayload } from '@typeSpec/payloads';
import moment from 'moment/moment';

export const formatTimeOrDays = (timestamp: string): string => {
  const currentTime = new Date();
  const date = new Date(timestamp);
  const timeDifference = currentTime.getTime() - date.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (timeDifference <= oneDay) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  } else {
    const daysDifference = Math.floor(timeDifference / oneDay);
    return `${daysDifference} day(s) ago`;
  }
};

export const getISODateWithOffset = (days?: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + (days ?? 0));
  return date.toISOString();
};

export const convertObjectToGlobalSelectInputProps = (
  data: any,
  valueKey: string,
  placeholderKey: string
): SelectInputFieldProps[] => {
  const selectData: SelectInputFieldProps[] = [];

  data.map((item: any) => {
    return selectData.push({
      value: item[valueKey],
      placeholder: item[placeholderKey],
    });
  });

  return selectData;
};

export const generateRandomCharacters = (min?: number): string => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const allowedChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$!%*?&';
  const minLength = min ?? 10;

  let randomCharacters = '';

  while (randomCharacters.length < minLength || !regex.test(randomCharacters)) {
    randomCharacters = '';
    for (let i = 0; i < minLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      randomCharacters += allowedChars.charAt(randomIndex);
    }
  }

  return randomCharacters;
};

export const calculateAge = (givenDate: Date | undefined): string | number => {
  const dob = new Date(givenDate ?? '');
  if (!givenDate) return '--';

  const monthDiff = Date.now() - dob.getTime();
  const ageDate = new Date(monthDiff);

  const year = ageDate.getUTCFullYear();
  const age = Math.abs(year - 1970);

  if (age > 0) return `${age} Year(s)`;
  else return `${ageDate.getUTCMonth()} Month(s)`;
};

export const formatResponseKeyForDropdown = (key: string) => {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase letters
    .replace(/^./, function (str) {
      return str.toUpperCase();
    }); // Capitalize the first letter
};

export const revertDropdownOptionsToResponseKey = (key: string) => {
  return key
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''; // Remove spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

export const formatPhoneNumber = (
  phone: number,
  regionCode: string,
  type?:
    | 'input'
    | 'international'
    | 'national'
    | 'e164'
    | 'rfc3966'
    | 'significant'
) => {
  const phoneType = type ?? 'national';
  return parsePhoneNumber(phone.toString(), {
    regionCode,
  }).number?.[phoneType];
};

export const getTotalRowsAndPerPage = (
  data: { totalRows: number },
  perPage: string | number
) => {
  const noOfPages =
    typeof perPage === 'string' ? 1 : Math.ceil(data?.totalRows / perPage);

  return {
    noOfPages,
    totalRows: data?.totalRows,
  };
};

export const processCountAndChartData = (
  data: CountDataPayload[],
  timeLine?:
    | 'All'
    | 'Last Day'
    | 'Last Week'
    | 'Last 30 Days'
    | 'Last 180 Days'
    | 'Last 360 Days'
) => {
  const xAxis: string[] = [],
    yAxis: number[] = [];

  if (timeLine)
    data?.map((item) => {
      switch (timeLine) {
        case 'All':
          xAxis.push(moment(item.date).format('MMM YYYY'));
          yAxis.push(Number(item.count));
          break;

        case 'Last Day':
          xAxis.push(moment(item.date).format('HH A'));
          yAxis.push(Number(item.count));
          break;

        case 'Last Week':
          xAxis.push(moment(item.date).format('D ddd'));
          yAxis.push(Number(item.count));
          break;

        case 'Last 30 Days':
          xAxis.push(moment(item.date).format('DD MMM'));
          yAxis.push(Number(item.count));
          break;

        case 'Last 180 Days':
          xAxis.push(moment(item.date).format('DD MMM YYYY'));
          yAxis.push(Number(item.count));
          break;

        case 'Last 360 Days':
          xAxis.push(moment(item.date).format('MMM'));
          yAxis.push(Number(item.count));
          break;
      }
    });
  else
    data?.map((item) => {
      xAxis.push(item?.name ?? '');
      yAxis.push(Number(item?.count ?? 0));
    });

  return [xAxis, yAxis];
};
