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
import styles from "./MultiStepForm.module.css";

const schema = z.object({
  fullName,
  email,
  phone,
  portifolioLink,
});

export const MultiStepForm = () => {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
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
  );
};
