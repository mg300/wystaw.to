import React from "react";
import css from "./Input.module.css";

function Input(props) {
  return (
    <>
      {props.title !== undefined && <label htmlFor={props.name}>{props.title}</label>}
      <input
        id={props.id}
        className={`${css[props.className]} ${!props.valid ? css.invalid : ""} ${props.touched ? css.touched : ""}`}
        type={props.type}
        name={props.name}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
        step={props?.step}
      ></input>
    </>
  );
}

export default Input;
