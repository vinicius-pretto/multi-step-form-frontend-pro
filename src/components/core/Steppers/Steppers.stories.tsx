import type { Meta, StoryObj } from "@storybook/react";

import { expect, fn, userEvent, within } from "@storybook/test";
import { Steppers } from "./Steppers";
import { StepProps } from "./components/Step";

const meta: Meta<StepProps> = {
  args: {
    onClick: fn(),
  },
} satisfies Meta<StepProps>;

export default meta;
type Story = StoryObj<StepProps>;

type SteppersPreviewProps = {
  onClick: (title: string) => void;
};

const SteppersPreview = ({ onClick }: SteppersPreviewProps) => {
  return (
    <Steppers aria-label="Join our Community of Developers">
      <Steppers.Step title="Personal Info" onClick={onClick} completed />
      <Steppers.Step title="Skill Level" onClick={onClick} completed />
      <Steppers.Step title="Challenge Preference" onClick={onClick} active />
      <Steppers.Step title="Review and Confirm" onClick={onClick} />
    </Steppers>
  );
};

export const Overview: Story = {
  render: SteppersPreview,
};

export const HasAccessibleLabel: Story = {
  render: SteppersPreview,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const steppers = canvas.getByRole("tablist", {
      name: /Join our Community of Developers/i,
    });

    expect(steppers).toBeInTheDocument();
  },
};

export const ClickOnStep: Story = {
  render: SteppersPreview,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("tab", { name: /Skill Level/i }));

    expect(args.onClick).toHaveBeenCalledWith("Skill Level");
  },
};

export const ActiveStep: Story = {
  render: SteppersPreview,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const activeStep = canvas.getByRole("tab", { selected: true });

    expect(activeStep).toHaveTextContent("Challenge Preference");
  },
};

export const CompletedSteps: Story = {
  render: SteppersPreview,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const completedSteps = canvas
      .getAllByRole("tab")
      .filter((step) => step.dataset.completed);

    expect(completedSteps).toHaveLength(2);
  },
};
