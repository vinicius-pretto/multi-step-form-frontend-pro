import { z } from "zod";

export const skillLevel = z.enum([
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
]);

export type TSkillLevel = z.infer<typeof skillLevel>;
