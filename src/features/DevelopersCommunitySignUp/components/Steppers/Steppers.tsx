import { Steppers as SteppersBase } from "@/components/core/Steppers";
import { useMultiStepForm } from "../../providers/MultiStepFormProvider";
import steps from "./steps.json";

export const Steppers = () => {
  const { changeStep, step: currentStep } = useMultiStepForm();

  return (
    <SteppersBase>
      {steps.map((step) => (
        <SteppersBase.Step
          key={step.id}
          title={step.name}
          onClick={() => changeStep(step.id)}
          aria-selected={step.id === currentStep}
        />
      ))}
    </SteppersBase>
  );
};
