import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "../../../providers/MultiStepFormProvider";
import { skillLevelSchema, SkillLevelSchema } from "../SkillLevel.schema";

export const useSkillLevel = () => {
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

  return {
    formMethods,
    handleSubmitSkillLevel: formMethods.handleSubmit(onSubmit),
    hasErrors: Boolean(formMethods.formState.errors.skillLevel),
  };
};
