//https://fakestoreapi.com/products?limit=5
import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts, fetchCategories, fetchProductsByCategory } from "./thunks";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    productListFilter: [],
    categoryList: [],
  },
  reducers: {
    searchProduct: (state, action) => {
      var search = state.productList.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()));

      state.productListFilter = search;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.productListFilter = action.payload;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });

    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.productListFilter = action.payload;
    });

    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        console.log("pending");
      }
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        console.log("rejeceted");
      }
    );
  },
});

export const { searchProduct } = productSlice.actions;

export default productSlice.reducer;
