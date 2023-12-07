/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import products from '../../../../data/products';
const initialState = {
    products: products,
    selectedProduct: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = state.products.find(
                (p) => p.id === action.payload
            );
        },
        addNewProduct: (state, action) => {
            console.log("action>>>", action.payload);
            const newProduct = action.payload.product;
            state.products.push({ product: newProduct });
        }
    },
});
