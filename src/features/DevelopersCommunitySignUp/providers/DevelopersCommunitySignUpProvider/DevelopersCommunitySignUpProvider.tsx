import { createContext, ReactNode, useContext, useState } from "react";
import { PersonalInfo } from "../../components/MultiStepForm/steps/PersonalInformation/personalInformation.schema";

export type DevelopersCommunitySignUpContextProps = {
  personalInfo?: PersonalInfo;
  storePersonalInfoFormFields: (personalInfo: PersonalInfo) => void;
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

  const storePersonalInfoFormFields = (personalInfoValues: PersonalInfo) => {
    setPersonalInfo(personalInfoValues);
  };

  return (
    <DevelopersCommunitySignUpContext.Provider
      value={{
        storePersonalInfoFormFields,
        personalInfo,
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
