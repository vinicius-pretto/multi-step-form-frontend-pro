import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'Placeholder',
    required: true,
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {}
