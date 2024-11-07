"use client";

import { Button } from "@/components/core/Button";
import { Card } from "@/components/core/Card";
import { Typography } from "@/components/core/Typography";
import styles from "./DevelopersCommunitySignUp.module.css";
import { Header } from "./components/Header";
import { MultiStepForm } from "./components/MultiStepForm";
import { Steppers } from "./components/Steppers";

export const DevelopersCommunitySignUp = () => {
  const handleStepClick = (stepName: string) => {
    console.log(`${stepName} clicked`);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Card>
          <Card.Header className="px-5">
            <Steppers onClick={handleStepClick} />
          </Card.Header>
          <Card.Body>
            <Typography htmlTag="h1" size="lg" weight="medium">
              Personal Information
            </Typography>
            <Typography
              htmlTag="p"
              size="sm"
              color="lightGray"
              className={styles.description}
            >
              Please provide your personal details so we can get to know you
              better.
            </Typography>
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
  );
};
