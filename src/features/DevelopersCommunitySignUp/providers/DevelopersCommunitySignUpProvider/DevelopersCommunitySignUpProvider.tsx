import { TSkillLevel } from "@/components/domain/SkillLevelSelector/SkillLevelSelector.schema";
import { createContext, ReactNode, useContext, useState } from "react";
import { TChallengePreference } from "../../components/MultiStepForm/components/ChallengePreference/components/ChallengePreferenceSelector/ChallengePreferenceSelector.schema";
import { PersonalInfo } from "../../components/MultiStepForm/components/PersonalInformation/personalInformation.schema";

export type DevelopersCommunitySignUpContextProps = {
  personalInfo?: PersonalInfo;
  skillLevel?: TSkillLevel;
  challengePreference?: TChallengePreference;
  storePersonalInfoFormFields: (personalInfo: PersonalInfo) => void;
  storeSkillLevelFormFields: (skillLevel: TSkillLevel) => void;
  storeChallengePreferenceFormFields: (
    challengePreference: TChallengePreference,
  ) => void;
};

const DevelopersCommunitySignUpContext = createContext<
  DevelopersCommunitySignUpContextProps | undefined
>(undefined);

type DevelopersCommunitySignUpProviderProps = {
  children: ReactNode;
};

export const DevelopersCommunitySignUpProvider = ({
  children,
}: DevelopersCommunitySignUpProviderProps) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(
    {} as PersonalInfo,
  );
  const [skillLevel, setSkillLevel] = useState<TSkillLevel | undefined>();
  const [challengePreference, setChallengePreference] = useState<
    TChallengePreference | undefined
  >();

  const storePersonalInfoFormFields = (personalInfoValues: PersonalInfo) => {
    setPersonalInfo(personalInfoValues);
  };

  const storeSkillLevelFormFields = (skillLevel: TSkillLevel) => {
    setSkillLevel(skillLevel);
  };

  const storeChallengePreferenceFormFields = (
    challengePreference: TChallengePreference,
  ) => {
    setChallengePreference(challengePreference);
  };

  return (
    <DevelopersCommunitySignUpContext.Provider
      value={{
        storePersonalInfoFormFields,
        storeSkillLevelFormFields,
        storeChallengePreferenceFormFields,
        personalInfo,
        skillLevel,
        challengePreference,
      }}
    >
      {children}
    </DevelopersCommunitySignUpContext.Provider>
  );
};

export const useDevelopersCommunitySignUp = () => {
  const context = useContext(DevelopersCommunitySignUpContext);

  if (context === undefined) {
    throw new Error(
      "useDevelopersCommunitySignUp must be used within a DevelopersCommunitySignUpProvider",
    );
  }
  return context;
};
