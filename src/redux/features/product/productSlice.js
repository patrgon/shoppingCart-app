//https://fakestoreapi.com/products?limit=5
import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts, fetchCategories } from "./thunks";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    categoryList: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
        console.log(action.payload);
      state.categoryList = action.payload;
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

export default productSlice.reducer;
