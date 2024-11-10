import { createContext, ReactNode, useContext, useState } from "react";
import { PersonalInfo } from "../../components/MultiStepForm/components/PersonalInformation/personalInformation.schema";

export type DevelopersCommunitySignUpContextProps = {
  personalInfo?: PersonalInfo;
  skillLevel?: string;
  storePersonalInfoFormFields: (personalInfo: PersonalInfo) => void;
  storeSkillLevelFormFields: (skillLevel: string) => void;
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
  const [skillLevel, setSkillLevel] = useState<string>("");

  const storePersonalInfoFormFields = (personalInfoValues: PersonalInfo) => {
    setPersonalInfo(personalInfoValues);
  };

  const storeSkillLevelFormFields = (skillLevel: string) => {
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
