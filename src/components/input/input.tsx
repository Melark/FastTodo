import React, { ChangeEvent, VFC } from "react";
import styles from "./styles.module.scss";

export enum Icon {
  Username,
  Password,
}

export interface InputProps {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  icon: Icon;
}

export const Input: VFC<InputProps> = ({
  placeholder,
  value,
  onValueChange,
  icon,
}) => {
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };
  return (
    <input
      className={styles.input}
      value={value}
      onChange={handleValueChange}
      placeholder={placeholder}
    />
  );
};
