import { stripNonNumeric } from "../stripNonNumeric";

const PHONE_NUMBER_REGEX = /^(\d{0,3})(\d{0,3})(\d{1,4})$/;

const phoneNumberMask = (value: string, index: number) => {
  if (index === 0 && value.length >= 1 && value.length < 3) {
    return `(${value}`;
  } else if (index === 0 && value.length === 3) {
    return `(${value}) `;
  } else if (index === 1 && value.length === 3) {
    return `${value}-`;
  } else {
    return value;
  }
};

export const formatPhoneNumber = (value: string) => {
  return stripNonNumeric(value)
    .slice(0, 10)
    .replace(PHONE_NUMBER_REGEX, "$1-$2-$3")
    .split("-")
    .map(phoneNumberMask)
    .join("");
};
