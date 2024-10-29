import { z } from "zod";

export const PHONE_MIN_LENGTH = 1;

export const phoneErrors = {
  required: "Required",
  invalid: "Invalid phone number",
};

export const phone = z
  .string()
  .min(PHONE_MIN_LENGTH, { message: phoneErrors.required });
