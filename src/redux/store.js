import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/features/product/productSlice';

export const store = configureStore({
  reducer: {
    product : productReducer,
  },
});
