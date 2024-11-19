import { Typography } from "@/components/core/Typography";
import { FormProvider } from "react-hook-form";
import { Description } from "../Description";
import { ChallengePreferenceSelector } from "./components/ChallengePreferenceSelector";
import { useChallengePreference } from "./hooks/useChallengePreference";

export const ChallengePreference = () => {
  const { formMethods, handleSubmitChallengePreference } =
    useChallengePreference();

  return (
    <>
      <Typography htmlTag="h2" size="lg" weight="medium">
        Challenge Preference
      </Typography>
      <Description>
        Please tell us which frontend challenges you would like to participate
        in.
      </Description>
      <FormProvider {...formMethods}>
        <form
          id="challenge-preference"
          noValidate
          onSubmit={handleSubmitChallengePreference}
        >
          <ChallengePreferenceSelector />
        </form>
      </FormProvider>
    </>
  );
};
