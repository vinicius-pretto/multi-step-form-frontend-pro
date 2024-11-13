import { skillLevel } from "@/components/domain/SkillLevelSelector/SkillLevelSelector.schema";
import { z } from "zod";

export const skillLevelSchema = z.object({
  skillLevel: skillLevel,
});

export type SkillLevelSchema = z.infer<typeof skillLevelSchema>;
