import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface burgerState {
    openBurger: boolean,
}

export const initialState: burgerState = {
    openBurger: false,
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setOpenBurger: (state, action: PayloadAction<boolean>) => {
            state.openBurger = action.payload
        }
    }
})

export const {setOpenBurger} = burgerSlice.actions;
export default burgerSlice.reducer;