import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, within } from "@storybook/test";
import { z } from "zod";
import { withForm } from "../../../../.storybook/decorators/withForm";
import { Phone } from "./Phone";
import { phone } from "./Phone.schema";

const schema = z.object({ phone });

const meta: Meta<typeof Phone> = {
  component: Phone,
  decorators: [withForm({ schema })],
} satisfies Meta<typeof Phone>;

export default meta;
type Story = StoryObj<typeof Phone>;

export const Overview: Story = {};

export const HasPlaceholder: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("(222) 222-2222");

    expect(input).toBeInTheDocument();
  },
};

export const HasLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(/Phone Number\(required\)/i);

    expect(label).toBeInTheDocument();
  },
};

export const Required: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button", { name: /Submit/i });

    expect(
      canvas.queryByRole("textbox", {
        name: /Phone Number/i,
        description: "Required",
      })
    ).not.toBeInTheDocument();

    await userEvent.click(submitButton);

    expect(
      await canvas.findByRole("textbox", {
        name: /Phone Number/i,
        description: "Required",
      })
    ).toBeInTheDocument();
  },
};

export const Format: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole("textbox", { name: /Phone Number/i }),
      "abc21522222222222222xyz"
    );

    expect(
      await canvas.findByRole("textbox", { name: /Phone Number/i })
    ).toHaveValue("(215) 222-2222");
  },
};
