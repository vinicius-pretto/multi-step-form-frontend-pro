import { z } from "zod";

export const challengePreference = z.object({
  htmlcssjs: z.boolean(),
  reactjs: z.boolean(),
  angularjs: z.boolean(),
  vuejs: z.boolean(),
});

export type TChallengePreference = z.infer<typeof challengePreference>;
