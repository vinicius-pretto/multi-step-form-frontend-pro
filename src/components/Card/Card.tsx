import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import styles from './Card.module.css';

export type CardProps = ComponentPropsWithoutRef<'div'>;

export const Card = ({ className, children, ...rest }: CardProps) => {
  return <div className={clsx([styles.card, className])} {...rest}>{children}</div>;
};

const CardHeader = ({ className, children, ...rest }: CardProps) => {
  return <div className={clsx([styles.cardHeader, className])} {...rest}>{children}</div>;
}

const CardBody = ({ className, children, ...rest }: CardProps) => {
  return <div className={clsx([styles.cardBody, className])} {...rest}>{children}</div>;
}

const CardFooter = ({ className, children, ...rest }: CardProps) => {
  return <div className={clsx([styles.cardFooter, className])} {...rest}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;