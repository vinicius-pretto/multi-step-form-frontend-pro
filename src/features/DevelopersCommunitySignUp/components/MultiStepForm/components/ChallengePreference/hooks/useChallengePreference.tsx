import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "../../../providers/MultiStepFormProvider";
import {
  challengePreference as challengePreferenceSchema,
  TChallengePreference,
} from "../components/ChallengePreferenceSelector/ChallengePreferenceSelector.schema";

export const useChallengePreference = () => {
  const { nextStep } = useMultiStepForm();
  const { storeChallengePreferenceFormFields, challengePreference } =
    useDevelopersCommunitySignUp();

  const formMethods = useForm<TChallengePreference>({
    mode: "onBlur",
    shouldFocusError: false,
    defaultValues: challengePreference,
    resolver: zodResolver(challengePreferenceSchema),
  });

  const onSubmit: SubmitHandler<TChallengePreference> = (formValues) => {
    const result = challengePreferenceSchema.safeParse(formValues);
    if (!result.success) {
      return;
    }
    nextStep();
    storeChallengePreferenceFormFields(formValues);
  };

  return {
    formMethods,
    handleSubmitChallengePreference: formMethods.handleSubmit(onSubmit),
  };
};
