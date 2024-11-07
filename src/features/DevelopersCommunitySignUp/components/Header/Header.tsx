import { Typography } from "@/components/core/Typography";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <Typography size="xl" font="serif" htmlTag="h1" weight="black">
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
  );
};
