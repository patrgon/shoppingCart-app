"use client";

import {useCartActions} from "../../hooks/useCart";

import styles from "./Product.module.css";

export default function Product({ product }) {

  const { id, title, price, description, image, category } = product;
  
  const {addProduct} = useCartActions();

  return (
    <article className={styles.product}>
      <div className={styles.product_title}>
        <p>{title} </p>
      </div>
      <div className={styles.image}>
        <img src={image} className={styles.product_image}/>
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
