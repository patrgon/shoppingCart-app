import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetch", async (_, { rejectWithValue }) => {
    return fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((data) => {return data})
      .catch(function (error) {
        // handle error
        console.log("error");
        return rejectWithValue(error.message);
      });
  }
);
