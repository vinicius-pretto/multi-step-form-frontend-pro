"use client";

import { Card } from "@/components/core/Card";
import styles from "./DevelopersCommunitySignUp.module.css";
import { FormActions } from "./components/FormActions";
import { Header } from "./components/Header";
import { MultiStepForm } from "./components/MultiStepForm";
import { MultiStepFormProvider } from "./components/MultiStepForm/providers/MultiStepFormProvider";
import { Steppers } from "./components/Steppers";
import steps from "./components/Steppers/steps.json";
import { DevelopersCommunitySignUpProvider } from "./providers/DevelopersCommunitySignUpProvider";

export const DevelopersCommunitySignUp = () => {
  return (
    <DevelopersCommunitySignUpProvider>
      <MultiStepFormProvider initialStep="personal-information" steps={steps}>
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
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
          </main>
        </div>
      </MultiStepFormProvider>
    </DevelopersCommunitySignUpProvider>
  );
};
