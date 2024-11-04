import { ComponentPropsWithoutRef } from "react";
import styles from "./Steppers.module.css";
import { Step } from "./components/Step";

export type SteppersProps = ComponentPropsWithoutRef<"div">;

export const Steppers = ({ children, ...rest }: SteppersProps) => {
  return (
    <div role="tablist" className={styles.steppers} {...rest}>
      {children}
    </div>
  );
};

Steppers.Step = Step;
