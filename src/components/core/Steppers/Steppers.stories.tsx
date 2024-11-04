import type { Meta, StoryObj } from "@storybook/react";

import { Steppers } from "./Steppers";

const meta: Meta<typeof Steppers> = {
  component: Steppers,
} satisfies Meta<typeof Steppers>;

export default meta;
type Story = StoryObj<typeof Steppers>;

const SteppersPreview = () => {
  const handleClick = (title: string) => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <Steppers aria-label="Join our Community of Developers">
      <Steppers.Step
        title="Personal Info"
        onClick={handleClick}
        active
        completed
      />
      <Steppers.Step title="Skill Level" onClick={handleClick} completed />
      <Steppers.Step title="Challenge Preference" onClick={handleClick} />
      <Steppers.Step title="Review and Confirm" onClick={handleClick} />
    </Steppers>
  );
};

export const Overview: Story = {
  render: SteppersPreview,
};
