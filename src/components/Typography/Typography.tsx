import { merriweather } from '@/fonts/merriweather';
import clsx from 'clsx';
import styles from './Typography.module.css';
import { typographyFonts, TypographyProps } from './Typography.types';

export const Typography = (props: TypographyProps) => {
  const {
    children,
    size,
    className,
    htmlTag = 'h1',
    color = 'dark',
    font = 'sans-serif',
    align = 'left',
    ...rest
  } = props;
  const Component = htmlTag;
  const fontFamily = font === typographyFonts.serif ? merriweather : undefined

  return (
    <Component
      data-size={size}
      data-color={color}
      data-align={align}
      className={clsx([styles.typography, fontFamily, className])}
      {...rest}
    >
      {children}
    </Component>
  );
};