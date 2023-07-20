"use client";

import styles from "./CartList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useCartActions } from "../../hooks/useCart";

export default function CartList() {
  const { items, total } = useSelector((state) => state.cart);
  const {removeProduct, add_quantity, remove_quantity} = useCartActions();
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th> </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <button
                className={styles.table_remove}
                onClick={() => removeProduct(item.id)}
              >
                X
              </button>
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => remove_quantity(item)}>DESCONTAR</button>
              {item.quantity}
              <button onClick={() => add_quantity(item)}>AUMENTAR</button>
            </td>
            <td>${item.subTotal}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" className={styles.table_total_price}>TOTAL: </td>
          <td className={styles.table_total_price}>${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}
