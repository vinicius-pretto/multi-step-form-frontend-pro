import { ChallengePreference } from "./components/ChallengePreference";
import { PersonalInformation } from "./components/PersonalInformation";
import { ReviewAndConfirm } from "./components/ReviewAndConfirm";
import { SkillLevel } from "./components/SkillLevel";
import { useMultiStepForm } from "./providers/MultiStepFormProvider";

export const MultiStepForm = () => {
  const { step } = useMultiStepForm();

  switch (step) {
    case "skill-level": {
      return <SkillLevel />;
    }

    case "challenge-preference": {
      return <ChallengePreference />;
    }

    case "review-and-confirm": {
      return <ReviewAndConfirm />;
    }

    default: {
      return <PersonalInformation />;
    }
  }
};
