import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {

      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.subTotal = item.quantity * item.price;
        state.total += item.price;
      } else {
        const quantity = 1;
        const subTotal = quantity * action.payload.price;
        state.items.push({ ...action.payload, quantity, subTotal });
        state.total += action.payload.price;
      }
    },
    remove: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      state.total = state.total - item.subTotal;

      state.items = state.items.filter((item) => item.id !== action.payload);


    },

    addQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity += 1;
      item.subTotal = item.quantity * item.price;
      state.total += item.price;
    },

    removeQuantity: (state, action) => {
      const itemRemove = state.items.find((item) => item.id === action.payload.id);
      itemRemove.quantity -= 1;
      if(itemRemove.quantity < 1){
        state.total -= itemRemove.price;
        state.items = state.items.filter((item) => item.id !== itemRemove.id);
      }else{
        
        itemRemove.subTotal = itemRemove.quantity * itemRemove.price;
        state.total -= itemRemove.price;
      }
      
    }
  },
});

export const { add, remove, addQuantity, removeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
