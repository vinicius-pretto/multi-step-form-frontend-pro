import { Typography } from "@/components/core/Typography";
import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";
import { Description } from "../Description";

const displayInfo = new Map([
  ["fullName", "Full Name"],
  ["email", "Email Address"],
  ["phone", "Phone Number"],
  ["portifolioLink", "Portifolio/GitHub Link"],
  ["skillLevel", "Skill Level"],
  ["challengePreference", "Challenge Preference"],
]);

export const ReviewAndConfirm = () => {
  const { personalInfo, skillLevel, challengePreference } =
    useDevelopersCommunitySignUp();

  if (!personalInfo || !skillLevel) {
    return null;
  }

  const challengePreferenceString = challengePreference
    ? Object.keys(challengePreference).join(", ")
    : "";

  const reviewInformation = {
    ...personalInfo,
    skillLevel,
    challengePreference: challengePreferenceString,
  };

  return (
    <>
      <Typography htmlTag="h1" size="lg" weight="medium">
        Review and Confirm
      </Typography>
      <Description>
        Please review your information to make sure everything is accurate.
      </Description>
      <dl>
        {Object.entries(reviewInformation).map(([key, value]) => (
          <div key={key}>
            <dt>{displayInfo.has(key) ? displayInfo.get(key) : null}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
};
