import CartList from '../components/cartList/CartList';
import styles from './page.module.css';

export default function page() {
  return (
    <div className={styles.main}>
        <CartList/>
    </div>
  )
}
