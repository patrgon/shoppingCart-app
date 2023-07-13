"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../redux/features/product/thunks";

export default function ProductList() {
  const dispatch = useDispatch();
  
  const  {productList} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  return (
    <div>
      Product List
      {productList.map(product => <p key={product.id}>{product.title}</p>)}
    </div>
  );
}
