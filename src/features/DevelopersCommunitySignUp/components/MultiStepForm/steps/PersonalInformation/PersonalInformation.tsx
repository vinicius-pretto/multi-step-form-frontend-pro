import { Typography } from "@/components/core/Typography";
import { Email } from "@/components/domain/Email";
import { FullName } from "@/components/domain/FullName";
import { Phone } from "@/components/domain/Phone";
import { PortifolioLink } from "@/components/domain/PortifolioLink";
import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import styles from "./PersonalInformation.module.css";
import {
  PersonalInfo,
  personalInformationSchema,
} from "./personalInformation.schema";

export const PersonalInformation = () => {
  const { nextStep } = useMultiStepForm();
  const { storePersonalInfoFormFields, personalInfo } =
    useDevelopersCommunitySignUp();

  const formMethods = useForm<PersonalInfo>({
    mode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      fullName: personalInfo?.fullName || "",
      email: personalInfo?.email || "",
      phone: personalInfo?.phone || "",
      portifolioLink: personalInfo?.portifolioLink || "",
    },
  });

  const onSubmit: SubmitHandler<PersonalInfo> = (personalInfo) => {
    const { error } = personalInformationSchema.safeParse(personalInfo);
    if (error) {
      return;
    }
    nextStep();
    storePersonalInfoFormFields(personalInfo);
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
