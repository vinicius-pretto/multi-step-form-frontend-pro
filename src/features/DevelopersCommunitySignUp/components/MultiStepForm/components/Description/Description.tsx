import { Typography } from "@/components/core/Typography";
import { TypographyProps } from "@/components/core/Typography/Typography.types";
import styles from "./Description.module.css";

export type DescriptionProps = Omit<
  TypographyProps,
  "htmlTag" | "size" | "color"
>;

export const Description = ({ children, ...rest }: DescriptionProps) => {
  return (
    <Typography
      {...rest}
      htmlTag="p"
      size="sm"
      color="lightGray"
      className={styles.description}
    >
      {children}
    </Typography>
  );
};
