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
import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import styles from "./PersonalInformation.module.css";

const personalInformationSchema = z.object({
  fullName,
  email,
  phone,
  portifolioLink,
});

export const PersonalInformation = () => {
  const { nextStep } = useMultiStepForm();
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(personalInformationSchema),
  });

  const onSubmit = (values: unknown) => {
    console.log(values);
    if (!formMethods.formState.isValid) {
      return;
    }
    nextStep();
  };

  return (
    <>
      <Typography htmlTag="h1" size="lg" weight="medium">
        Personal Information
      </Typography>
      <Typography
        htmlTag="p"
        size="sm"
        color="lightGray"
        className={styles.description}
      >
        Please provide your personal details so we can get to know you better.
      </Typography>

      <FormProvider {...formMethods}>
        <form
          id="personalInfo"
          noValidate
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <div className="formGroup">
            <FullName />
            <Email />
          </div>
          <div className="formGroup">
            <Phone />
            <PortifolioLink />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
