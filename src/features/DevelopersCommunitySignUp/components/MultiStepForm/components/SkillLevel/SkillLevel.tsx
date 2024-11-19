import { Typography } from "@/components/core/Typography";
import { SkillLevelSelector } from "@/components/domain/SkillLevelSelector";
import { FormProvider } from "react-hook-form";
import { Description } from "../Description";
import { useSkillLevel } from "./hooks/useSkillLevel";

export const SkillLevel = () => {
  const { hasErrors, formMethods, handleSubmitSkillLevel } = useSkillLevel();

  return (
    <>
      <Typography htmlTag="h2" size="lg" weight="medium">
        Skill Level
      </Typography>
      <Description>
        Please tell us about your skill level in frontend development.
      </Description>
      <FormProvider {...formMethods}>
        <form id="skill-level" onSubmit={handleSubmitSkillLevel} noValidate>
          <SkillLevelSelector error={hasErrors} />
        </form>
      </FormProvider>
    </>
  );
};
