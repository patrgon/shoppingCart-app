"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

import { useProductActions } from "../../hooks/useProduct";

import styles from "./Header.module.css";

export default function Header() {
  const { items } = useSelector((state) => state.cart);

  const { searchProductByName } = useProductActions();

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
            onChange={(e) => searchProductByName(e.target.value)}
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
