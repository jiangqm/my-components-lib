import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Authon: kermit
 * @Date: 2023-09-17 11:28:03
 * @Description:
 */
/**
 * @title Button Demo1 Title
 * @description Button demo1 description
 * @order 1
 */
import Button from "../index";
const Demo1 = () => {
  return _jsx(Button, {
    danger: true,
    children: _jsx("span", { children: "demo1" })
  });
};
export default Demo1;
