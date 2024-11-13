import { TSkillLevel } from "@/components/domain/SkillLevelSelector/SkillLevelSelector.schema";
import { createContext, ReactNode, useContext, useState } from "react";
import { PersonalInfo } from "../../components/MultiStepForm/components/PersonalInformation/personalInformation.schema";

export type DevelopersCommunitySignUpContextProps = {
  personalInfo?: PersonalInfo;
  skillLevel?: TSkillLevel;
  storePersonalInfoFormFields: (personalInfo: PersonalInfo) => void;
  storeSkillLevelFormFields: (skillLevel: TSkillLevel) => void;
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

  const storePersonalInfoFormFields = (personalInfoValues: PersonalInfo) => {
    setPersonalInfo(personalInfoValues);
  };

  const storeSkillLevelFormFields = (skillLevel: TSkillLevel) => {
    setSkillLevel(skillLevel);
  };

  return (
    <DevelopersCommunitySignUpContext.Provider
      value={{
        storePersonalInfoFormFields,
        storeSkillLevelFormFields,
        personalInfo,
        skillLevel,
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
