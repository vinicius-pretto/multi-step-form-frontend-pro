import { Steppers as SteppersBase } from "@/components/core/Steppers";
import { StepOnClickFn } from "@/components/core/Steppers/components/Step";
import steps from "./steps.json";

export type DevelopersCommunitySignUpStepperProps = {
  onClick: StepOnClickFn;
};

export const Steppers = ({
  onClick,
}: DevelopersCommunitySignUpStepperProps) => {
  return (
    <SteppersBase>
      {steps.map((step) => (
        <SteppersBase.Step key={step.id} title={step.name} onClick={onClick} />
      ))}
    </SteppersBase>
  );
};
