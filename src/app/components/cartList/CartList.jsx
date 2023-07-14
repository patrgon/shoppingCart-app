"use client";

import styles from "./CartList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../../redux/features/cart/cartSlice";

export default function CartList() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th> </th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
                <button className={styles.table_remove} onClick={() => dispatch(remove(item.id))}>{item.id}</button>
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
