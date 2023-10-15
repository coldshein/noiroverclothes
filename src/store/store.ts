import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import burgerReducer from './burgerSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        burger: burgerReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

