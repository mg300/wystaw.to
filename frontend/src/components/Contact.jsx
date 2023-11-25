import React from "react";
import css from "./Contact.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

function Contact() {
  return (
    <div className={css.container}>
      <p className={css.title}>SKONTAKTUJ SIĘ</p>
      <p className={css.info}>
        {" "}
        <span className={css.icon}>
          <MdAccountCircle />
        </span>{" "}
        Witold Kowalski
      </p>
      <p className={css.info}>
        <span className={css.icon}>
          <FaPhone />
        </span>
        881232010
      </p>
      <p className={css.info}>
        <span className={css.icon}>
          <FaLocationDot />
        </span>
        Wrocław
      </p>
      <button className={css.btn}>Wyślij wiadomość</button>
    </div>
  );
}

export default Contact;
