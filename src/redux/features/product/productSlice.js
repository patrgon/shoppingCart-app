//https://fakestoreapi.com/products?limit=5
import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts, } from './thunks';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
    },
    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productList = action.payload;
        })

        builder.addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state, action) => {
                console.log('pending')
            }
        )

        builder.addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state, action) => {
                console.log('rejeceted')
            }
        )

    }

});


export default productSlice.reducer;