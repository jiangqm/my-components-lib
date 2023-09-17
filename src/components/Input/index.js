import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./style/index.module.scss";
const Input = props => {
  const [inputValue, setInputValue] = useState("");
  const { type = "text", value } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInputChange = e => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };
  useEffect(() => {
    setInputValue(value || "");
  }, [value]);
  console.log(styles);
  return _jsx("div", {
    children: _jsx("input", {
      className: styles.input,
      type: type,
      value: inputValue,
      onChange: onInputChange
    })
  });
};
export default Input;
