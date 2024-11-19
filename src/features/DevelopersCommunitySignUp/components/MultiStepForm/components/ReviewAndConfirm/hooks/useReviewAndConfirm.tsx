import { useDevelopersCommunitySignUp } from "@/features/DevelopersCommunitySignUp/providers/DevelopersCommunitySignUpProvider";

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

export const useReviewAndConfirm = () => {
  const { personalInfo, skillLevel, challengePreference } =
    useDevelopersCommunitySignUp();

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

  return {
    displayInfo,
    reviewInformation,
  };
};
