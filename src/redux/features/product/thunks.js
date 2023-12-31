import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    return fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(function (error) {
        // handle error
        console.log("error");
        return rejectWithValue(error.message);
      });
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    return fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(function (error) {
        // handle error
        console.log("error");
        return rejectWithValue(error.message);
      });
  }
);

//crear thunk para : fakestoreapi.com/products/category/jewelery?limit=6

export const fetchProductsByCategory = createAsyncThunk(
  "productByCategory/fetch",
  async (category, { rejectWithValue }) => {
    return fetch(`https://fakestoreapi.com/products/category/`+category+`?limit=6`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(function (error) {
        // handle error
        console.log("error");
        return rejectWithValue(error.message);
      });
  }
);
