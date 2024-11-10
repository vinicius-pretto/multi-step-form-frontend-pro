import { Typography } from "@/components/core/Typography";
import { Email } from "@/components/domain/Email";
import { FullName } from "@/components/domain/FullName";
import { Phone } from "@/components/domain/Phone";
import { PortifolioLink } from "@/components/domain/PortifolioLink";
import { FormProvider } from "react-hook-form";
import { usePersonalInfoForm } from "./hooks/usePersonalInfoForm";
import styles from "./PersonalInformation.module.css";

export const PersonalInformation = () => {
  const { formMethods, handleSubmitPersonalInfo } = usePersonalInfoForm();

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
          id="personal-information"
          noValidate
          onSubmit={handleSubmitPersonalInfo}
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
