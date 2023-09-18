/*
 * @Author: jiangqm
 * @Date: 2023-09-18 08:21:07
 * @Description:
 */
import { describe, expect, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "my-components-lib";

describe("Input Component", () => {
  it("renders correctly", () => {
    const { getByRole, getByLabelText } = render(<Input />);

    // 通过文本内容或角色查找按钮
    const decrementButton = getByLabelText("sub");

    const incrementButton = getByLabelText("add");

    // 通过输入框的角色查找输入框
    const inputElement = getByRole("textbox");

    // 确保按钮和输入框都存在
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("increments and decrements value correctly", () => {
    const { getByText, getByRole } = render(
      <Input value={0} min={0} max={10} />
    );

    const decrementButton = getByText("-");
    const incrementButton = getByText("+");
    const inputElement = getByRole("textbox");

    // 点击增加按钮
    fireEvent.click(incrementButton);
    expect(inputElement).toHaveValue(1);

    // 点击减少按钮
    fireEvent.click(decrementButton);
    expect(inputElement).toHaveValue(0);
  });

  it("respects min and max values", () => {
    const { getByText, getByRole } = render(
      <Input value={5} min={0} max={10} />
    );

    const decrementButton = getByText("-");
    const incrementButton = getByText("+");
    const inputElement = getByRole("textbox");

    // 尝试减少到最小值
    fireEvent.click(decrementButton);
    expect(inputElement).toHaveValue(4);

    // 尝试增加到最大值
    fireEvent.click(incrementButton);
    expect(inputElement).toHaveValue(5);
  });
});
