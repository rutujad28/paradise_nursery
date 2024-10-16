// src/redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
    items: [],  // Array to hold items in the cart
    totalCount: 0, // Total number of items in the cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to add an item to the cart
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;  // Increase quantity if item exists
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity
            }
            // Update total count of items in the cart
            state.totalCount = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        // Action to increase the quantity of an item in the cart
        increaseQuantity(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
            }
            // Update total count of items in the cart
            state.totalCount = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        // Action to decrease the quantity of an item in the cart
        decreaseQuantity(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1; // Decrease quantity if more than 1
            }
            // Update total count of items in the cart
            state.totalCount = state.items.reduce((total, item) => total + item.quantity, 0);
        },
        // Action to remove an item from the cart
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload); // Remove item from cart
            // Update total count of items in the cart
            state.totalCount = state.items.reduce((total, item) => total + item.quantity, 0);
        },
    },
});

// Exporting actions
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

// Default export of the reducer
export default cartSlice.reducer;
