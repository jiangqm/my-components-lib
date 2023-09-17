import { expect, describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Input from "../index";

// inputNumber.test.js

describe("InputNumber increments and decrements value", () => {
  // 渲染 InputNumber 组件
  const { container } = render(<Input value={22} />);

  // 获取 input 元素
  const input = container.querySelector("input");

  // 获取增加和减少按钮
  const incrementButton = container.querySelector(".increment-button");
  const decrementButton = container.querySelector(".decrement-button");

  // 初始值应为 0
  expect(input.value).toBe("0");

  // 模拟点击增加按钮
  fireEvent.click(incrementButton);

  // 值应该增加到 1
  expect(input.value).toBe("1");

  // 模拟点击减少按钮
  fireEvent.click(decrementButton);

  // 值应该减少到 0
  expect(input.value).toBe("0");
});
