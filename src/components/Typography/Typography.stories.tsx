import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";
import { typographyColors, TypographyProps, typographySizes } from "./Typography.types";

const meta: Meta<typeof Typography> = {
  component: Typography,
  args: {
    children: 'Typography',
    htmlTag: 'h1',
    color: 'dark',
    size: 'xl'
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {}

const TypographyColorsStores = (props: Pick<TypographyProps, 'htmlTag'>) => {
  return (
    <ul>
      {Object.values(typographyColors).map(color => (
        <li key={color}>
          <Typography {...props} size="md" color={color}>{color}</Typography>
        </li>
      ))}
    </ul>
  )
}

export const Colors: Story = {
  render: (args) => <TypographyColorsStores {...args} />
}

const TypographySizes = (props: Pick<TypographyProps, 'htmlTag' | 'color'>) => {
  return (
    <ul>
      {Object.values(typographySizes).map(size => (
        <li key={size}>
          <Typography {...props} size={size} color="dark">Typography ({size})</Typography>
        </li>
      ))}
    </ul>
  )
}

export const Sizes: Story = {
  render: (args) => <TypographySizes {...args} />
}