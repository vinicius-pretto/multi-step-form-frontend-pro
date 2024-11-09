import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMultiStepForm } from "../../../providers/MultiStepFormProvider";
import {
  PersonalInfo,
  personalInformationSchema,
} from "../personalInformation.schema";

export const usePersonalInfoForm = () => {
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

  return {
    handleSubmitPersonalInfo: formMethods.handleSubmit(onSubmit),
    formMethods,
  };
};
