import { z } from "zod";

export const portifolioLinkErrors = {
  invalid: "Invalid URL",
};

export const portifolioLink = z
  .string()
  .url({ message: portifolioLinkErrors.invalid })
  .optional();
