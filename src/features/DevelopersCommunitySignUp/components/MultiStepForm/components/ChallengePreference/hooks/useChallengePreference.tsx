import { SubmitHandler, useForm } from "react-hook-form";
import { TChallengePreference } from "../components/ChallengePreferenceSelector/ChallengePreferenceSelector.schema";

export const useChallengePreference = () => {
  const formMethods = useForm<TChallengePreference>({
    mode: "onBlur",
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<TChallengePreference> = (formValues) => {
    console.log("Challenge Preference form submitted", formValues);
  };

  return {
    formMethods,
    handleSubmitChallengePreference: formMethods.handleSubmit(onSubmit),
  };
};
