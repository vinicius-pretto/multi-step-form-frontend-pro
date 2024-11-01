import type { Meta, StoryObj } from "@storybook/react";

import { Steppers } from "./Steppers";

const meta: Meta<typeof Steppers> = {
  component: Steppers,
} satisfies Meta<typeof Steppers>;

export default meta;
type Story = StoryObj<typeof Steppers>;

export const Default: Story = {};
