import { ReactNode } from "react";
import { Header } from "../Header";
import styles from "./PageLayout.module.css";

export type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
