import { CustomDate } from "./otherTypes/otherTypes";

export const customDate: CustomDate = (date) => {
  let month: string | number = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  let day: string | number = date.getDate();
  if (day < 10) day = `0${day}`;

  let hour: string | number = date.getUTCHours();
  if (hour < 10) hour = `0${hour}`;

  let minutes: string | number = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return `${day}.${month}.${date.getFullYear()} ${hour}:${minutes}`;
};
