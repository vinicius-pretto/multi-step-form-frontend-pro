import styles from './Typography.module.css';
import { TypographyProps } from './Typography.types';

export const Typography = ({ children, htmlTag = 'h1', size, color = 'dark', ...rest }: TypographyProps) => {
  const Component = htmlTag;
  return <Component className={styles.typography} data-size={size} data-color={color} {...rest}>{children}</Component>;
};