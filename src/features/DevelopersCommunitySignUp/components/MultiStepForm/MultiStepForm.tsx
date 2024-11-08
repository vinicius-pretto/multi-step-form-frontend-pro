import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import { ChallengePreference } from "./steps/ChallengePreference";
import { PersonalInformation } from "./steps/PersonalInformation";
import { ReviewAndConfirm } from "./steps/ReviewAndConfirm";
import { SkillLevel } from "./steps/SkillLevel";

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
