import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface cartState  {
    openCart: boolean,
}

const initialState: cartState = {
    openCart: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpenCart: (state, action: PayloadAction<boolean>) => {
            state.openCart = !action.payload
        }
    }
})

export const {setOpenCart} = cartSlice.actions;
export default cartSlice.reducer;