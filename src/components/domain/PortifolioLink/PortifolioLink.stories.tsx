import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, within } from "@storybook/test";
import { z } from "zod";
import { withForm } from "../../../../.storybook/decorators/withForm";
import { PortifolioLink } from "./PortifolioLink";
import { portifolioLink } from "./PortifolioLink.schema";

const schema = z.object({ profileLink: portifolioLink });

const meta: Meta<typeof PortifolioLink> = {
  component: PortifolioLink,
  decorators: [withForm({ schema })],
} satisfies Meta<typeof PortifolioLink>;

export default meta;
type Story = StoryObj<typeof PortifolioLink>;

export const Overview: Story = {};

export const HasPlaceholder: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByPlaceholderText("https://github.com/johndoe"),
    ).toBeInTheDocument();
  },
};

export const HasLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByLabelText(/Portifolio\/GitHub Link/i),
    ).toBeInTheDocument();
  },
};

export const Optional: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: /Submit/i }));

    expect(
      canvas.getByRole("textbox", { name: /Portifolio\/GitHub Link/i }),
    ).not.toHaveAttribute("required");
    expect(
      canvas.getByRole("textbox", { name: /Portifolio\/GitHub Link/i }),
    ).toHaveAttribute("aria-invalid", "false");
  },
};

export const InvalidUrl: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole("textbox", { name: /Portifolio\/GitHub Link/i }),
      "github.com/johndoe",
    );

    await userEvent.click(canvas.getByRole("button", { name: /Submit/i }));

    expect(
      canvas.getByRole("textbox", {
        name: /Portifolio\/GitHub Link/i,
        description: "Invalid URL",
      }),
    ).toBeInTheDocument();
  },
};

export const ValidUrl: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByRole("textbox", { name: /Portifolio\/GitHub Link/i }),
      "https://github.com/johndoe",
    );

    await userEvent.click(canvas.getByRole("button", { name: /Submit/i }));

    expect(
      canvas.getByRole("textbox", {
        name: /Portifolio\/GitHub Link/i,
      }),
    ).toHaveAttribute("aria-invalid", "false");
  },
};
