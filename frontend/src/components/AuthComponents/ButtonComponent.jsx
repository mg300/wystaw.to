import React from "react";
import css from "./ButtonComponent.module.css";
const ButtonComponent = ({ disabled, spinner, children, onClick, color }) => {
  let colorClass = "";
  if (color) {
    const colors = {
      1: "color-1",
      2: "color-2",
      3: "color-3",
    };
    colorClass = colors[color];
  }

  return (
    <>
      <button
        aria-label="Przycisk"
        disabled={disabled}
        className={`${css.btn} ${css[colorClass]}`}
        type="submit"
        onClick={onClick}
      >
        {!spinner && children}
        {spinner && <span className={css.loader}></span>}
      </button>
    </>
  );
};

export default ButtonComponent;
