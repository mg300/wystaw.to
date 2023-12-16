import React from "react";
import css from "./product.module.css";
//import przyklad from "../images/przyklad2.png";

function Product(props) {
  return (
      <div className={css.container}>
      <img src={props.source} alt="zdjecie" className={css.img}></img>
      <p className={css.title}>{props.title}</p>
      <p className={css.info}>{props.price}</p>
      <p className={css.address}>{props.address}</p>
    </div>
  );
}

export default Product;