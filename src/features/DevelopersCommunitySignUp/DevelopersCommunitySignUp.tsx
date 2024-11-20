"use client";

import { Card } from "@/components/core/Card";
import { PageLayout } from "@/components/layout/PageLayout";
import { FormActions } from "./components/FormActions";
import { MultiStepForm } from "./components/MultiStepForm";
import { MultiStepFormProvider } from "./components/MultiStepForm/providers/MultiStepFormProvider";
import { Steppers } from "./components/Steppers";
import steps from "./components/Steppers/steps.json";
import { DevelopersCommunitySignUpProvider } from "./providers/DevelopersCommunitySignUpProvider";

export const DevelopersCommunitySignUp = () => {
  return (
    <DevelopersCommunitySignUpProvider>
      <MultiStepFormProvider initialStep="personal-information" steps={steps}>
        <PageLayout>
          <Card>
            <Card.Header className="px-5">
              <Steppers />
            </Card.Header>
            <Card.Body>
              <MultiStepForm />
            </Card.Body>
            <Card.Actions>
              <FormActions />
            </Card.Actions>
          </Card>
        </PageLayout>
      </MultiStepFormProvider>
    </DevelopersCommunitySignUpProvider>
  );
};
