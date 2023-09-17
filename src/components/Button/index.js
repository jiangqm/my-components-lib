import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./style/index.module.scss";
/**
 * 按钮组件
 * @param props
 * @returns
 */
const MyButton = props => {
  return _jsx("button", {
    className: props.danger ? styles["btn-danger"] : "",
    children: props.children
  });
};
export default MyButton;
