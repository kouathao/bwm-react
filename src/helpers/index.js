import titleize from "titleize";

export const rentalType = isShared => {
  return isShared ? "Shared" : "Entire";
};

export const toUpperCase = value => (value ? titleize(value) : "");
