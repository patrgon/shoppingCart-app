import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
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
            <Link href="/shoppingCart">Mi Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
