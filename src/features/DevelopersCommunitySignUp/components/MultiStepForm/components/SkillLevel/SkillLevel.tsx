import { Typography } from "@/components/core/Typography";
import { SkillLevelSelector } from "@/components/domain/SkillLevelSelector";
import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import { Description } from "../Description";
import { SkillLevelSchema, skillLevelSchema } from "./SkillLevel.schema";

export const SkillLevel = () => {
  const { nextStep } = useMultiStepForm();
  const { storeSkillLevelFormFields, skillLevel } =
    useDevelopersCommunitySignUp();

  const formMethods = useForm<SkillLevelSchema>({
    mode: "onChange",
    shouldFocusError: false,
    resolver: zodResolver(skillLevelSchema),
    defaultValues: {
      skillLevel,
    },
  });

  const onSubmit: SubmitHandler<SkillLevelSchema> = (formValues) => {
    const result = skillLevelSchema.safeParse(formValues);

    if (!result.success) {
      return;
    }
    nextStep();
    storeSkillLevelFormFields(formValues.skillLevel);
  };

  return (
    <>
      <Typography htmlTag="h1" size="lg" weight="medium">
        Skill Level
      </Typography>
      <Description>
        Please tell us about your skill level in frontend development.
      </Description>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} id="skill-level">
          <SkillLevelSelector
            error={Boolean(formMethods.formState.errors.skillLevel)}
          />
        </form>
      </FormProvider>
    </>
  );
};
