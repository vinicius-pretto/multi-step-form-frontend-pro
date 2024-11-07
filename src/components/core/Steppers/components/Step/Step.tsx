import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from "react";
import styles from "./Step.module.css";

export type StepOnClickFn = (title: string) => void;

export type StepProps = Omit<ComponentPropsWithRef<"button">, "onClick"> & {
  title: string;
  active?: boolean;
  completed?: boolean;
  onClick: StepOnClickFn;
};

const StepBase = (props: StepProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { title, active, completed, onClick, ...rest } = props;
  const id = useId();

  const handleClick = () => {
    onClick(title);
  };

  return (
    <button
      ref={ref}
      role="tab"
      tabIndex={0}
      className={styles.step}
      aria-selected={active === true}
      aria-labelledby={id}
      data-completed={completed}
      onClick={handleClick}
      {...rest}
    >
      <span hidden id={id}>
        {title}
      </span>
    </button>
  );
};

export const Step = forwardRef(StepBase);
