import { z } from "zod";

export const FULL_NAME_MIN_LENGTH = 1;
export const FULL_NAME_MAX_LENGTH = 128;

export const fullNameErrorMessages = {
  required: "Required",
  maxLength: `Must be at most ${FULL_NAME_MAX_LENGTH} characters`,
};

export const fullName = z
  .string()
  .min(FULL_NAME_MIN_LENGTH, { message: fullNameErrorMessages.required })
  .max(FULL_NAME_MAX_LENGTH, { message: fullNameErrorMessages.maxLength });
