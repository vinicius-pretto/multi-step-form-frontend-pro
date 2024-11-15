import React from "react";
import { MultiStepFormProvider } from "../../src/features/DevelopersCommunitySignUp/components/MultiStepForm/providers/MultiStepFormProvider";
import steps from "../../src/features/DevelopersCommunitySignUp/components/Steppers/steps.json";
import { DevelopersCommunitySignUpProvider } from "../../src/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";

export type WithProvidersProps = {
  initialStep: string;
};

export const withProviders = ({ initialStep }: WithProvidersProps) => {
  return (Story: React.FunctionComponent) => {
    return (
      <DevelopersCommunitySignUpProvider>
        <MultiStepFormProvider initialStep={initialStep} steps={steps}>
          <Story />
        </MultiStepFormProvider>
      </DevelopersCommunitySignUpProvider>
    );
  };
};
