import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        cartItems: [], 
        shippingInfo: {}
    },
    reducers: {
        addCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        setShippingInfo: (state, action) => {
            state.shippingInfo = action.payload;
        },    
    }
})