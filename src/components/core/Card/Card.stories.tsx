import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Typography } from "../Typography";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  render: () => {
    return (
      <div style={{ maxWidth: "30rem" }}>
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Typography htmlTag="h1" size="lg" weight="semibold">
              Personal Information
            </Typography>
            <Typography htmlTag="p" size="sm">
              Please provide your personal details so we can get to know you
              better.
            </Typography>
          </Card.Body>
          <Card.Actions>
            <Button>Next Step</Button>
          </Card.Actions>
        </Card>
      </div>
    );
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Overview: Story = {};
