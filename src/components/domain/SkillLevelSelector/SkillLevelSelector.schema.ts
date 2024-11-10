import { z } from "zod";

export const skillLevel = z.enum([
  "beginner",
  "intermediate",
  "advanced",
  "expert",
]);
