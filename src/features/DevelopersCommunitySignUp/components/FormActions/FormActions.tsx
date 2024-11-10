import { Button } from "@/components/core/Button";
import { useMultiStepForm } from "../MultiStepForm/providers/MultiStepFormProvider";
import styles from "./FormActions.module.css";

export const FormActions = () => {
  const { step, isFirstStep, previousStep } = useMultiStepForm();

  return (
    <div className={styles.formActions}>
      {isFirstStep ? null : (
        <Button type="button" variant="outlined" onClick={previousStep}>
          Back
        </Button>
      )}

      <Button type="submit" className={styles.nextStepButton} form={step}>
        Next Step
      </Button>
    </div>
  );
};
