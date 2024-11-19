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

const displayValue = new Map([
  ["htmlcssjs", "HTML/CSS/JS"],
  ["reactjs", "React.js"],
  ["angularjs", "AngularJs"],
  ["vuejs", "Vue.js"],
]);

export const ReviewAndConfirm = () => {
  const { personalInfo, skillLevel, challengePreference } =
    useDevelopersCommunitySignUp();

  if (!personalInfo || !skillLevel) {
    return null;
  }

  const challengePreferenceString = Object.entries(challengePreference || {})
    .map(([key, value]) => {
      return value === true ? displayValue.get(key) : null;
    })
    .filter((val) => val !== null)
    .sort()
    .join(", ");

  const reviewInformation = {
    ...personalInfo,
    skillLevel,
    challengePreference: challengePreferenceString,
  };

  return (
    <>
      <Typography htmlTag="h2" size="lg" weight="medium">
        Review and Confirm
      </Typography>
      <Description>
        Please review your information to make sure everything is accurate.
      </Description>
      <dl>
        {Object.entries(reviewInformation).map(([key, value]) => (
          <div key={key}>
            <dt>{displayInfo.has(key) ? displayInfo.get(key) : key}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
};
