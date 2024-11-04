import type { Meta, StoryObj } from "@storybook/react";

import { Steppers } from "./Steppers";

const meta: Meta<typeof Steppers> = {
  component: Steppers,
} satisfies Meta<typeof Steppers>;

export default meta;
type Story = StoryObj<typeof Steppers>;

const SteppersPreview = () => {
  return (
    <Steppers aria-label="Join our Community of Developers">
      <Steppers.Step title="Personal Info" active completed />
      <Steppers.Step title="Skill Level" completed />
      <Steppers.Step title="Challenge Preference" />
      <Steppers.Step title="Review and Confirm" />
    </Steppers>
  );
};

export const Overview: Story = {
  render: SteppersPreview,
};
