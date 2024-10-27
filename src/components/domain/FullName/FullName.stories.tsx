import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from '@storybook/test';
import { withForm } from '../../../../.storybook/decorators/withForm';

import { FullName } from "./FullName";

const meta: Meta<typeof FullName> = {
  component: FullName,
  decorators: [withForm()],
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
    const requiredMessage = canvas.getByRole('textbox', {
      name: 'Full Name',
      description: 'Required'
    })

    userEvent.click(submitButton);

    expect(requiredMessage).toBeInTheDocument();
  }
}

export const Format: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: /Full Name/i });

    userEvent.type(input, 'john doe');

    expect(input).toHaveValue('John Doe');
  }
}