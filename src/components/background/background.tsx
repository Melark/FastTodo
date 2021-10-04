import React, { FC } from "react";
import styles from "./styles.module.scss";

export const Background: FC = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};
