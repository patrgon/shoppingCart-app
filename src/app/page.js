import styles from './page.module.css'
import ProductList from './components/product/ProductList'

export default function Home() {
  return (
    <main className={styles.main}>
      Store App
      <ProductList/>
    </main>
  )
}
