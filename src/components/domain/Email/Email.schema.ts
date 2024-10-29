import { z } from "zod";

export const EMAIL_MIN_LENGTH = 1;
export const EMAIL_MAX_LENGTH = 255;

export const emailErrors = {
  invalid: "Invalid email",
  required: "Required",
  maxLength: `Email must be at most ${EMAIL_MAX_LENGTH} characters`,
};

export const email = z
  .string({ message: emailErrors.invalid })
  .email({ message: emailErrors.invalid })
  .min(EMAIL_MIN_LENGTH, { message: emailErrors.required })
  .max(EMAIL_MAX_LENGTH, { message: emailErrors.maxLength });
