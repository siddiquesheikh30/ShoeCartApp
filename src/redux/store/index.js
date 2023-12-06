/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './features/products/productsSlice';
import { cartSlice } from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    },
});
