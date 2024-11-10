import { Button } from "@/components/core/Button";
import { useMultiStepForm } from "../MultiStepForm/providers/MultiStepFormProvider";

export const SubmitButton = () => {
  const { step } = useMultiStepForm();

  return (
    <Button type="submit" form={step}>
      Next Step
    </Button>
  );
};
