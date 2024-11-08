"use client";

import { Button } from "@/components/core/Button";
import { Card } from "@/components/core/Card";
import styles from "./DevelopersCommunitySignUp.module.css";
import { Header } from "./components/Header";
import { MultiStepForm } from "./components/MultiStepForm";
import { Steppers } from "./components/Steppers";
import { MultiStepFormProvider } from "./providers/MultiStepFormProvider";

export const DevelopersCommunitySignUp = () => {
  return (
    <MultiStepFormProvider initialStep="personal-information">
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
              <Button type="submit" form="personalInfo">
                Next Step
              </Button>
            </Card.Actions>
          </Card>
        </main>
      </div>
    </MultiStepFormProvider>
  );
};