import { Typography } from "@/components/core/Typography";
import { Description } from "../Description";
import { useReviewAndConfirm } from "./hooks/useReviewAndConfirm";

export const ReviewAndConfirm = () => {
  const { reviewInformation, displayInfo } = useReviewAndConfirm();

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
