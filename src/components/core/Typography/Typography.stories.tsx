import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";
import {
  typographyColors,
  typographyFonts,
  TypographyProps,
  typographySizes,
  typographyWeights,
} from "./Typography.types";

const meta: Meta<typeof Typography> = {
  component: Typography,
  args: {
    children: "Typography",
    htmlTag: "h1",
    color: "dark",
    size: "xl",
    font: "sans-serif",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Overview: Story = {};

const TypographyColorsStores = (props: Pick<TypographyProps, "htmlTag">) => {
  return (
    <ul>
      {Object.values(typographyColors).map((color) => (
        <li key={color}>
          <Typography {...props} size="md" color={color}>
            {color}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export const Colors: Story = {
  render: (args) => <TypographyColorsStores {...args} />,
};

const TypographySizes = (props: Pick<TypographyProps, "htmlTag" | "color">) => {
  return (
    <ul>
      {Object.values(typographySizes).map((size) => (
        <li key={size}>
          <Typography {...props} size={size} color="dark">
            Typography ({size})
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export const Sizes: Story = {
  render: (args) => <TypographySizes {...args} />,
};

const TypographyFonts = (
  props: Pick<TypographyProps, "htmlTag" | "color" | "size">,
) => {
  return (
    <ul>
      {Object.values(typographyFonts).map((font) => (
        <li key={font}>
          <Typography {...props} size="md" color="dark" font={font}>
            Typography ({font})
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export const Fonts: Story = {
  render: (args) => <TypographyFonts {...args} />,
};

const TypographyWeights = (
  props: Pick<TypographyProps, "htmlTag" | "color" | "size" | "weight">,
) => {
  return (
    <ul>
      {Object.values(typographyWeights).map((weight) => (
        <li key={weight}>
          <Typography {...props} size="md" color="dark" weight={weight}>
            Typography ({weight})
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export const Weights: Story = {
  render: (args) => <TypographyWeights {...args} />,
};
