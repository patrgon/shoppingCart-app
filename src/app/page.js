import styles from './page.module.css'
import ProductList from './components/productList/ProductList'
import CategoryList from './components/categoryList/CategoryList'

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoryList/>
      <ProductList/>
    </main>
  )
}
