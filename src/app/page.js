import styles from './page.module.css'
import ProductList from './components/productList/ProductList'

export default function Home() {
  return (
    <main className={styles.main}>
      Store App
      <ProductList/>
    </main>
  )
}
