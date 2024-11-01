import { ComponentPropsWithoutRef } from "react";
import styles from "./Steppers.module.css";

export type SteppersProps = ComponentPropsWithoutRef<"div"> & {
  ariaLabel: string;
};

export const Steppers = ({ ariaLabel }: SteppersProps) => {
  return (
    <div role="tablist" className={styles.steppers} aria-label={ariaLabel}>
      <Step id="step1" active ariaLabel="Personal Info" />
      <Step id="step2" ariaLabel="Skill Level" />
      <Step id="step3" ariaLabel="Challenge Preference" />
      <Step id="step4" ariaLabel="Review and Confirm" />
    </div>
  );
};

export type StepProps = {
  id: string;
  ariaLabel: string;
  active?: boolean;
};

const Step = ({ id, ariaLabel, active }: StepProps) => {
  return (
    <div
      role="tab"
      aria-selected={active}
      tabIndex={0}
      id={id}
      aria-labelledby="personalInfo"
      className={styles.step}
    >
      <span hidden id="personalInfo">
        {ariaLabel}
      </span>
    </div>
  );
};
