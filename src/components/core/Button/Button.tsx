import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

export const buttonVariants = {
  default: 'default',
  outlined: 'outlined',
} as const;

export type ButtonVariant = (typeof buttonVariants)[keyof typeof buttonVariants];

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
};

export const Button = ({ className, children, variant = 'default', ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx([styles.button, className])}
      data-variant={variant}
      {...rest}
    >
      {children}
    </button>
  );
};