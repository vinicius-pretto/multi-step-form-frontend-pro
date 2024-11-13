import { ComponentPropsWithoutRef } from "react";
import styles from "./FormErrorMessage.module.css";

export type FormErrorMessageProps = ComponentPropsWithoutRef<"p"> & {
  error?: boolean;
};

export const FormErrorMessage = ({
  error,
  children,
  ...rest
}: FormErrorMessageProps) => {
  if (!error) {
    return null;
  }
  return (
    <p className={styles.formErrorMessage} {...rest}>
      {children}
    </p>
  );
};
