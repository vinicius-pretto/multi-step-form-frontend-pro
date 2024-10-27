import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  render: () => {
    return (
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Typography htmlTag="h1" size="lg">
            Personal Information
          </Typography>
          <Typography htmlTag="p" size="sm">
            Please provide your personal details so we can get to know you better.
          </Typography>
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    )
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {}
