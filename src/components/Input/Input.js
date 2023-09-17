import { jsx as _jsx } from "react/jsx-runtime";
import "./style/index.scss";
import { useState } from "react";
import { useEffect } from "react";
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
  return _jsx("div", {
    children: _jsx("input", {
      className: "input",
      type: type,
      value: inputValue,
      onChange: onInputChange
    })
  });
};
export default Input;
