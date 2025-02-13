import { REQUIRED_MSG } from "constants/constants";

export const validateFields = (fieldValue, param, type) => {
  let validationMessage = "";
  const value = fieldValue.trim();
  const { required, minLength, maxLength } = param;
  if (required && !value) validationMessage = REQUIRED_MSG;
  if (minLength && value && value.length < minLength)
    validationMessage = `Minimum ${minLength}Characters!`;
  if (maxLength && value && value.length > maxLength)
    validationMessage = `Maximum ${maxLength} Characters!`;

  return validationMessage;
};
