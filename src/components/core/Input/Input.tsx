import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from "react";
import styles from "./Input.module.css";

export type InputProps = ComponentPropsWithRef<"input"> & {
  label: string;
  required?: boolean;
  error?: string;
};

const InputBase = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, required, type, error, ...rest } = props;
  const id = useId();
  const errorId = useId();
  const requiredText = required ? "(required)" : "";
  const hasError = Boolean(error);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <span aria-hidden={true}>{requiredText}</span>
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className={styles.input}
        ref={ref}
        aria-describedby={errorId}
        data-error={hasError}
        aria-invalid={hasError}
        {...rest}
      />
      {hasError ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
