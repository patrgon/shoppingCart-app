"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts, fetchCategories } from "../../../redux/features/product/thunks";
import Product from "../product/Product";

import styles from "./ProductList.module.css";

export default function ProductList() {
  const dispatch = useDispatch();
  
  const  {productListFilter} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  return (
    <div className={styles.ProductList}>
      {productListFilter.map(product => <Product product={product} key={product.id}/>)}
    </div>
  );
}
