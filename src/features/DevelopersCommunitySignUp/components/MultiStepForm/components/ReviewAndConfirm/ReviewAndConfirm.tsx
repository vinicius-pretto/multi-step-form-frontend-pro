import { Typography } from "@/components/core/Typography";
import { Description } from "../Description";
import { useReviewAndConfirm } from "./hooks/useReviewAndConfirm";
import styles from "./ReviewAndConfirm.module.css";

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
      <dl className={styles.infoList}>
        {Object.entries(reviewInformation).map(([key, value]) => (
          <div className={styles.infoBox} key={key}>
            <dt className={styles.definitionTerm}>
              {displayInfo.has(key) ? displayInfo.get(key) : key}
            </dt>
            <dd className={styles.definitionData}>{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
};
