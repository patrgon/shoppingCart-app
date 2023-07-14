'use client'
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

export default function Header() {
  const  {items} = useSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/shoppingCart">Mi Carrito (<span>{items.length}</span>)</Link>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}
