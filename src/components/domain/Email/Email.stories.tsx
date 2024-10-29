import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, within } from "@storybook/test";
import { z } from "zod";
import { withForm } from "../../../../.storybook/decorators/withForm";
import { Email } from "./Email";
import { email } from "./Email.schema";

const schema = z.object({ email });

const meta: Meta<typeof Email> = {
  component: Email,
  decorators: [withForm({ schema })]
} satisfies Meta<typeof Email>;

export default meta;
type Story = StoryObj<typeof Email>;

export const Overview: Story = {}

export const HasLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByRole('textbox', {
      name: /Email Address/i
    })

    expect(label).toBeInTheDocument()
  }
}

export const HasPlaceholder: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const placeholder = canvas.getByPlaceholderText(/john.doe@domain.com/i)

    expect(placeholder).toBeInTheDocument()
  }
}

export const Required: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submitButton = canvas.getByRole('button', {
      name: /Submit/i
    });

    expect(canvas.queryByRole('textbox', {
      name: /Email Address/i,
      description: 'Invalid email'
    })).not.toBeInTheDocument()

    await userEvent.click(submitButton)

    const input = await canvas.findByRole('textbox', {
      name: /Email Address/i,
      description: 'Invalid email'
    })

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('required')
  }
}

export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.queryByRole('textbox', {
      name: /Email Address/i,
      description: 'Invalid email'
    })).not.toBeInTheDocument()

    await userEvent.type(canvas.getByRole('textbox', {
      name: /Email Address/i
    }), 'aaa@aaa')

    expect(canvas.getByRole('textbox', {
      name: /Email Address/i,
      description: 'Invalid email'
    })).toBeInTheDocument()
  }
}

export const ValidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByRole('textbox', {
      name: /Email Address/i
    }), 'john.doe@domain.com')

    expect(canvas.queryByRole('textbox', {
      name: /Email Address/i,
      description: 'Invalid email'
    })).not.toBeInTheDocument()

    expect(await canvas.findByRole('textbox', {
      name: /Email Address/i,
    })).toHaveValue('john.doe@domain.com')
  }
}