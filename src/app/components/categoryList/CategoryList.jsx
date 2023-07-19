"use client";

import { useEffect } from "react";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../../redux/features/product/thunks";
import { useSelector, useDispatch } from "react-redux";

import styles from "./CategoryList.module.css";

export default function CategoryList() {
  const dispatch = useDispatch();

  const { categoryList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.categoryList}>
      {categoryList.map((category) => (
        <article
          key={category}
          onClick={() => dispatch(fetchProductsByCategory(category))}
          className={styles.category_item}
        >
          {category}
        </article>
      ))}
    </div>
  );
}
