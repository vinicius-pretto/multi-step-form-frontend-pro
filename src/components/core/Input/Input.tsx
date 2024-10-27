import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from 'react';
import styles from './Input.module.css';

export type InputProps = ComponentPropsWithRef<'input'> & {
  label: string;
  required?: boolean;
};

const InputBase = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, required, type, ...rest } = props;
  const id = useId();
  const requiredText = required ? '(required)' : '';

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
        {...rest}
      />
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);