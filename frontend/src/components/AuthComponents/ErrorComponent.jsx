import React from "react";
import css from "./ErrorComponent.module.css";
const ErrorComponent = ({ children }) => {
  return <div className={css.title}>{children}</div>;
};
export default ErrorComponent;
