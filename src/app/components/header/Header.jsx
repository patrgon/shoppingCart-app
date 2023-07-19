"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../../../redux/features/product/productSlice";
import styles from "./Header.module.css";

export default function Header() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}></div>

      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <input
            type="text"
            className={styles.searchBar}
            onChange={(e) => dispatch(searchProduct(e.target.value))}
            placeholder="Buscar productos"
          />
          <li>
            <Link href="/shoppingCart">
              Mi Carrito (<span>{items.length}</span>)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
