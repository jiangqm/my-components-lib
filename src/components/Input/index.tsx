/*
 * @Author: jiangqm
 * @Date: 2023-09-15 08:27:28
 * @Description:
 */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style/index.module.scss";
export type InputProps = {
  type?: "text" | "password";
  value?: string | number;
  onChange?: (e: unknown) => void;
};

const Input: React.FC<InputProps> = props => {
  const [inputValue, setInputValue] = useState<string | number>("");
  const { type = "text", value } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  console.log(styles);

  return (
    <div>
      <input
        className={styles.input}
        type={type}
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};
export default Input;
