import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/features/product/productSlice';
import cartReducer from '../redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product : productReducer,
    cart : cartReducer,
  },
});
