import { ReactNode } from "react";

export const typographyColors = {
  dark: "dark",
  lightGray: "lightGray",
} as const;

export const typographySizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export const typographyFonts = {
  serif: "serif",
  sansSerif: "sans-serif",
} as const;

export const typographyWeights = {
  regular: "regular",
  medium: "medium",
  semibold: "semibold",
  black: "black",
} as const;

export type TypographyColors =
  (typeof typographyColors)[keyof typeof typographyColors];

export type typographySizes =
  (typeof typographySizes)[keyof typeof typographySizes];

export type TypographyFonts =
  (typeof typographyFonts)[keyof typeof typographyFonts];

export type TypographyWeights =
  (typeof typographyWeights)[keyof typeof typographyWeights];

export type TypographyHtmlTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

type TypographyAlign = "left" | "center" | "right" | "justify";

export type TypographyProps = {
  children: ReactNode;
  size: typographySizes;
  color?: TypographyColors;
  htmlTag?: TypographyHtmlTags;
  font?: TypographyFonts;
  align?: TypographyAlign;
  className?: string;
  weight?: TypographyWeights;
};
