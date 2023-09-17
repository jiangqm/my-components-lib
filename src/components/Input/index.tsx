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
  min?: number;
  max?: number;
  value?: number;
  onChange?: (e: unknown) => void;
};

const Input: React.FC<InputProps> = props => {
  const [inputValue, setInputValue] = useState<number | undefined>();
  const { value, min, max } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInputChange = (e: any) => {
    const _v = e.target.value;
    let nextVal = _v;

    if (max) {
      nextVal = Math.min(_v, max);
    } else if (min) {
      nextVal = Math.max(_v, min);
    }

    setInputValue(nextVal);
    if (props.onChange) {
      props.onChange(nextVal);
    }
  };

  useEffect(() => {
    setInputValue(value || undefined);
  }, [value]);

  const onAdd = () => {
    const _v = Number(inputValue) + 1;
    setInputValue(max && _v > max ? max : _v);
  };
  const onSub = () => {
    const _v = Number(inputValue) - 1;
    setInputValue(min && _v < min ? min : _v);
  };

  useEffect(() => {
    if (max && min && max < min) {
      throw new Error(
        `The maximum value must be greater than the minimum value`
      );
    }
  }, [max, min]);
  return (
    <div>
      <button onClick={onSub}>-</button>
      <input
        className={styles.input}
        type="number"
        value={inputValue}
        onChange={onInputChange}
      />
      <button onClick={onAdd}>+</button>
    </div>
  );
};
export default Input;
