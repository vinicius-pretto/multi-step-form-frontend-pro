import { z } from "zod";

export const challengePreference = z.object({
  htmlcssjs: z.boolean().optional(),
  reactjs: z.boolean().optional(),
  angularjs: z.boolean().optional(),
  vuejs: z.boolean().optional(),
});

export type TChallengePreference = z.infer<typeof challengePreference>;
