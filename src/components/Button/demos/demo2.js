import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Authon: kermit
 * @Date: 2023-09-17 11:28:03
 * @Description:
 */
/**
 * @title Button Demo2 Title
 * @description Button demo2 description
 * @order 2
 */
import Button from "../index";
const Demo2 = () => {
  return _jsx(Button, { children: _jsx("span", { children: "demo2" }) });
};
export default Demo2;
