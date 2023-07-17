import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {

      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state.items[index].quantity++;
        state.items[index].subTotal = state.items[index].quantity * state.items[index].price;
      } else {
        const quantity = 1;
        const subTotal = quantity * action.payload.price;
        state.items.push({ ...action.payload, quantity, subTotal });
      }
    },
    remove: (state, action) => {

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
