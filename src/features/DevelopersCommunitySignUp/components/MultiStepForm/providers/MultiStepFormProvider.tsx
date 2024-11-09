import { createContext, ReactNode, useContext, useState } from "react";

export type MultiStepFormContextProps = {
  step: string;
  changeStep: (step: string) => void;
  nextStep: () => void;
  steps: Step[];
};

const MultiStepFormContext = createContext<
  MultiStepFormContextProps | undefined
>(undefined);

type Step = {
  id: string;
  name: string;
  completed: boolean;
  enabled: boolean;
};

type MultiStepFormProviderProps = {
  children: ReactNode;
  initialStep: string;
  steps: Step[];
};

export const MultiStepFormProvider = ({
  children,
  initialStep,
  steps: initialSteps,
}: MultiStepFormProviderProps) => {
  const [step, setStep] = useState(() => initialStep);
  const [steps, setSteps] = useState<Step[]>(() => initialSteps);

  const markStepAsCompleted = (stepId: string, nextStepId: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id === stepId) {
          return { ...step, completed: true };
        }
        if (step.id === nextStepId) {
          return { ...step, enabled: true };
        }
        return step;
      }),
    );
  };

  const changeStep = (nextStep: string) => {
    setStep(nextStep);
  };

  const nextStep = () => {
    const currentStepIndex = steps.findIndex((s) => s.id === step);
    const nextStepIndex = currentStepIndex + 1;

    const isLastStep = nextStepIndex === steps.length;
    if (isLastStep) {
      return;
    }

    const nextStep = steps[nextStepIndex];
    if (!nextStep) {
      return;
    }
    markStepAsCompleted(step, nextStep.id);
    changeStep(nextStep.id);
  };

  return (
    <MultiStepFormContext.Provider
      value={{ changeStep, nextStep, step, steps }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);

  if (context === undefined) {
    throw new Error(
      "useMultiStepForm must be used within a MultiStepFormProvider",
    );
  }
  return context;
};
