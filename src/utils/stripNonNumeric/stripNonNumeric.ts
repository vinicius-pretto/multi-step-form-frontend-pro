const NON_NUMERIC_REGEX = /\D/g;

export const stripNonNumeric = (value: string) => {
  if (typeof value === "string") {
    return value.replace(NON_NUMERIC_REGEX, "");
  }
  return value;
};
