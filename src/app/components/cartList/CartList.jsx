"use client";

import styles from "./CartList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../../redux/features/cart/cartSlice";

export default function CartList() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
                onClick={() => dispatch(remove(item.id))}
              >
                {item.id}
              </button>
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
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
