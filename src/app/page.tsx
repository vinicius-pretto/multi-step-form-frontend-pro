"use client";

import { Button } from "@/components/core/Button";
import { Card } from "@/components/core/Card";
import { Typography } from "@/components/core/Typography";
import { Email } from "@/components/domain/Email";
import { email } from "@/components/domain/Email/Email.schema";
import { FullName } from "@/components/domain/FullName";
import { fullName } from "@/components/domain/FullName/FullName.schema";
import { Phone } from "@/components/domain/Phone";
import { phone } from "@/components/domain/Phone/Phone.schema";
import { PortifolioLink } from "@/components/domain/PortifolioLink";
import { portifolioLink } from "@/components/domain/PortifolioLink/PortifolioLink.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./page.module.css";

const schema = z.object({
  fullName,
  email,
  phone,
  portifolioLink,
});

export default function Home() {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <header>
        <Typography size="xl" font="serif" htmlTag="h1" weight="black">
          Join our Community of Developers
        </Typography>
        <Typography
          size="md"
          color="lightGray"
          align="center"
          htmlTag="p"
          className={styles.textMaxWidth}
        >
          To join our community and participate in frontend challenges. Please
          fill out the following form.
        </Typography>
      </header>
      <main className={styles.main}>
        <Card>
          <Card.Header>Progress Bar</Card.Header>
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
            <FormProvider {...formMethods}>
              <form
                id="personalInfo"
                noValidate
                onSubmit={formMethods.handleSubmit(onSubmit)}
              >
                <div className={styles.formGroup}>
                  <FullName />
                  <Email />
                </div>
                <div className={styles.formGroup}>
                  <Phone />
                  <PortifolioLink />
                </div>
              </form>
            </FormProvider>
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
}
