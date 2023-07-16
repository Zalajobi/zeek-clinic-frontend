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