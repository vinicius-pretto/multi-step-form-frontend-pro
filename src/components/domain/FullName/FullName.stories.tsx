import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from '@storybook/test';
import { withForm } from '../../../../.storybook/decorators/withForm';

import { z } from "zod";
import { FullName } from "./FullName";
import { FULL_NAME_MAX_LENGTH, fullName, fullNameErrorMessages } from "./FullName.schema";

const schema = z.object({ fullName })

const meta: Meta<typeof FullName> = {
  component: FullName,
  decorators: [withForm({ schema })],
} satisfies Meta<typeof FullName>;

export default meta;
type Story = StoryObj<typeof FullName>;

export const Default: Story = {}

export const HasPlaceholder: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: /Full Name/i });

    expect(input).toHaveAttribute('placeholder', 'John Doe');
  }
}

export const HasLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(/Full Name\(required\)/i);

    expect(label).toBeInTheDocument();
  }
}

export const Required: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /submit/i });

    expect(canvas.queryByRole('textbox', {
      name: 'Full Name',
      description: 'Required'
    })).not.toBeInTheDocument()

    await userEvent.click(submitButton);

    expect(await canvas.findByRole('textbox', {
      name: 'Full Name',
      description: fullNameErrorMessages.required
    })).toBeInTheDocument();
  }
}

export const MaxLength: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: /Full Name/i });

    await userEvent.type(input, 'a'.repeat(FULL_NAME_MAX_LENGTH + 1));

    expect(
      canvas.getByRole('textbox', {
        name: /Full Name/i,
        description: fullNameErrorMessages.maxLength
      })
    ).toBeInTheDocument();
  }
}

export const Format: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: /Full Name/i });

    await userEvent.type(input, 'john doe');

    expect(canvas.getByRole('textbox', { name: /Full Name/i, })).toHaveValue('John Doe');
  }
}