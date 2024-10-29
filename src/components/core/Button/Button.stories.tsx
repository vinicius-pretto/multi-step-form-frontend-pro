import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "Button",
    variant: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Overview: Story = {};

const ButtonVariantsStory = () => {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export const Variants: Story = {
  render: ButtonVariantsStory,
};
