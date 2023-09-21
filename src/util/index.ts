import { SelectInputFieldProps } from '../types/common';

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
