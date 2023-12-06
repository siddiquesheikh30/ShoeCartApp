/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    deliveryPrice: 15,
    freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find(
                (item) => item.product.id === newProduct.id
            );
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.items.push({ product: newProduct, quantity: 1 });
            }

        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find(item => item.product.id === productId);
            if (cartItem) {
                cartItem.quantity += amount;
            }
        },
    },
});

export const selectedNumberOfItems = (state) => state.cart.items.length;
