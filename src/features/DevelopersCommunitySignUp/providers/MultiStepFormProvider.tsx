import { createContext, ReactNode, useContext, useState } from "react";

export type MultiStepFormContextProps = {
  step: string;
  changeStep: (step: string) => void;
};

const MultiStepFormContext = createContext<
  MultiStepFormContextProps | undefined
>(undefined);

type MultiStepFormProviderProps = {
  children: ReactNode;
  initialStep: string;
};

export const MultiStepFormProvider = ({
  children,
  initialStep,
}: MultiStepFormProviderProps) => {
  const [step, setStep] = useState(() => initialStep);

  const changeStep = (nextStep: string) => {
    setStep(nextStep);
  };

  return (
    <MultiStepFormContext.Provider value={{ changeStep, step }}>
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
