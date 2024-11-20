import { Card } from "@/components/core/Card";
import { Typography } from "@/components/core/Typography";
import { PageLayout } from "@/components/layout/PageLayout";
import { CongratulationsIcon } from "./components/CongratulationsIcon";
import styles from "./Congratulations.module.css";

export const Congratulations = () => {
  return (
    <PageLayout>
      <Card>
        <div className={styles.congratulationsWrapper}>
          <div className={styles.congratulations}>
            <CongratulationsIcon />
            <Typography
              htmlTag="h1"
              size="lg"
              weight="medium"
              className={styles.title}
            >
              Congratulations! 🎉
            </Typography>
            <Typography htmlTag="p" size="sm" color="lightGray" align="center">
              Your profile has been created and you are now ready to start
              participating in challenges that match your interests and coding
              experience level.
            </Typography>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};
