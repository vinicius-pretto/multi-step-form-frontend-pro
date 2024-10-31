import { merriweather } from "@/fonts/merriweather";
import clsx from "clsx";
import styles from "./Typography.module.css";
import {
  typographyColors,
  typographyFonts,
  TypographyProps,
  typographyWeights,
} from "./Typography.types";

export const Typography = (props: TypographyProps) => {
  const {
    children,
    size,
    className,
    htmlTag = "h1",
    color = typographyColors.dark,
    font = typographyFonts.sansSerif,
    align = "left",
    weight = typographyWeights.regular,
    ...rest
  } = props;
  const Component = htmlTag;
  const fontFamily = font === typographyFonts.serif ? merriweather : undefined;

  return (
    <Component
      data-size={size}
      data-color={color}
      data-align={align}
      data-weight={weight}
      className={clsx([styles.typography, fontFamily, className])}
      {...rest}
    >
      {children}
    </Component>
  );
};
