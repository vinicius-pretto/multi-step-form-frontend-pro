import type { Meta, StoryObj } from "@storybook/react";

import { SkillLevel } from "./SkillLevel";

const meta: Meta<typeof SkillLevel> = {
  component: SkillLevel,
} satisfies Meta<typeof SkillLevel>;

export default meta;
type Story = StoryObj<typeof SkillLevel>;

export const Default: Story = {};
