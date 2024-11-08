import { Steppers as SteppersBase } from "@/components/core/Steppers";
import { useMultiStepForm } from "../MultiStepForm/providers/MultiStepFormProvider";

export const Steppers = () => {
  const { changeStep, step: currentStep, steps } = useMultiStepForm();

  return (
    <SteppersBase>
      {steps.map((step) => (
        <SteppersBase.Step
          key={step.id}
          title={step.name}
          onClick={() => changeStep(step.id)}
          active={step.id === currentStep}
          completed={step.completed}
        />
      ))}
    </SteppersBase>
  );
};
