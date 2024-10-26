import { merriweather } from '@/fonts/merriweather';
import clsx from 'clsx';
import styles from './Typography.module.css';
import { typographyFonts, TypographyProps } from './Typography.types';

export const Typography = ({ children, htmlTag = 'h1', size, color = 'dark', font = 'sans-serif', ...rest }: TypographyProps) => {
  const Component = htmlTag;
  const fontFamily = font === typographyFonts.serif ? merriweather : undefined
  return <Component className={clsx([styles.typography, fontFamily])} data-size={size} data-color={color} {...rest}>{children}</Component>;
};