import { Typography } from "@/components/core/Typography";
import { SkillLevelSelector } from "@/components/domain/SkillLevelSelector";
import { skillLevel } from "@/components/domain/SkillLevelSelector/SkillLevelSelector.schema";
import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { ChangeEvent } from "react";
import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import { Description } from "../Description";

export const SkillLevel = () => {
  const { nextStep } = useMultiStepForm();
  const { storeSkillLevelFormFields } = useDevelopersCommunitySignUp();

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (event.nativeEvent.target === null) {
      return;
    }

    const form = event.nativeEvent.target as HTMLFormElement;
    const skillLevelElement = form.elements.namedItem(
      "skillLevel",
    ) as HTMLInputElement;
    const result = skillLevel.safeParse(skillLevelElement.value);

    if (result.error) {
      return;
    }
    nextStep();
    storeSkillLevelFormFields(skillLevelElement.value);
  };

  return (
    <>
      <Typography htmlTag="h1" size="lg" weight="medium">
        Skill Level
      </Typography>
      <Description>
        Please tell us about your skill level in frontend development.
      </Description>
      <form onSubmit={onSubmit} id="skill-level" name="skillLevel">
        <SkillLevelSelector />
      </form>
    </>
  );
};
