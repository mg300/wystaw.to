import React, { useState } from "react";
import * as validator from "./validators";
import css from "./Login.module.css";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
import useInput from "./use-input";
import ErrorComponent from "./ErrorComponent";
function Login() {
  const [error, setError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => validator.email(value));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => validator.required(value));

  const loginHandler = (event) => {
    event.preventDefault();
    const login = event.target[0].value;
    const password = event.target[1].value;
    setSpinner(true);
    resetEmailInput();
    resetPasswordInput();
  };

  const InputsObj = [
    {
      id: "email-input",
      type: "email",
      className: "input",
      name: "email",
      title: "E-mail:",
      value: enteredEmail,
      valid: enteredEmailIsValid,
      touched: emailInputHasError,
      onBlur: emailBlurHandler,
      onChange: emailChangeHandler,
    },
    {
      id: "password-input",
      type: "password",
      className: "input",
      name: "password",
      title: "Hasło:",
      value: enteredPassword,
      valid: enteredPasswordIsValid,
      touched: passwordInputHasError,
      onBlur: passwordBlurHandler,
      onChange: passwordChangeHandler,
    },
  ];

  return (
    <div className={css.loginPanel}>
      <form onSubmit={loginHandler} className={css.loginForm}>
        {InputsObj.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            type={input.type}
            className={input.className}
            name={input.name}
            title={input.title}
            value={input.value}
            valid={input.valid}
            touched={input.touched}
            onBlur={input.onBlur}
            onChange={input.onChange}
          ></Input>
        ))}

        {error && <ErrorComponent>Niepoprawny login lub hasło</ErrorComponent>}
        <ButtonComponent disabled={!(enteredEmailIsValid && enteredPasswordIsValid)} spinner={spinner}>
          Zaloguj
        </ButtonComponent>
      </form>
    </div>
  );
}

export default Login;
