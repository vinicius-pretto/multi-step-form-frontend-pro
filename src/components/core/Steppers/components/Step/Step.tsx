import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from "react";
import styles from "./Step.module.css";

export type StepProps = ComponentPropsWithRef<"div"> & {
  title: string;
  active?: boolean;
  completed?: boolean;
};

const StepBase = (props: StepProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { title, active, completed, ...rest } = props;
  const id = useId();

  return (
    <div
      ref={ref}
      role="tab"
      tabIndex={0}
      className={styles.step}
      aria-selected={active === true}
      aria-labelledby={id}
      data-completed={completed}
      {...rest}
    >
      <span hidden id={id}>
        {title}
      </span>
    </div>
  );
};

export const Step = forwardRef(StepBase);
