import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/core/Card";
import { withProviders } from "../../../../../../../.storybook/decorators/withProviders";
import { FormActions } from "../../../FormActions";
import { ChallengePreference } from "./ChallengePreference";

const ChallengePreferenceWrapper = () => {
  return (
    <Card>
      <Card.Body>
        <ChallengePreference />
      </Card.Body>
      <Card.Actions>
        <FormActions />
      </Card.Actions>
    </Card>
  );
};

const meta: Meta<typeof ChallengePreference> = {
  component: ChallengePreference,
  decorators: [withProviders({ initialStep: "challenge-preference" })],
  render: () => <ChallengePreferenceWrapper />,
} satisfies Meta<typeof ChallengePreference>;

export default meta;
type Story = StoryObj<typeof ChallengePreference>;

export const Default: Story = {};
