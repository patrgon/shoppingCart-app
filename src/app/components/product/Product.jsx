"use client";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../../../redux/features/cart/cartSlice";

import styles from "./Product.module.css";

export default function Product({ product }) {

  const { id, title, price, description } = product;
  const dispatch = useDispatch();

  const addProduct = (product) => {
    alert("producto añadido! id:" + id)
    dispatch(add(product));
  }

  return (
    <article className={styles.product}>
      <div className={styles.product_title}>
        <p>{title} </p>
      </div>

      <p className={styles.product_price}>${price}</p>
      <div className={styles.product_description}>
        <p>{description}</p>
      </div>
      <button
        onClick={() => addProduct(product)}
        className={styles.product_button}
      >
        Añadir al carro
      </button>
    </article>
  );
}
