import { Typography } from "@/components/core/Typography";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Typography size="xl" font="serif">
          Join our Community of Developers
        </Typography>
        <Typography
          size="md"
          color="lightGray"
          align="center"
          htmlTag="p"
          className={styles.textMaxWidth}
        >
          To join our community and participate in frontend challenges. Please
          fill out the following form.
        </Typography>
      </header>
    </div>
  );
}
