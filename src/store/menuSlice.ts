import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface burgerState {
    openBurger: boolean,
    openSort: boolean,
    activeSort: string,
}

export const initialState: burgerState = {
    openBurger: false,
    openSort: false,
    activeSort: '',
}

export const menuSluce = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setOpenBurger: (state, action: PayloadAction<boolean>) => {
            state.openBurger = action.payload
        },
        setOpenSort: (state, action: PayloadAction<boolean>) =>{
            state.openSort = action.payload
        },
        setActiveSort: (state, action: PayloadAction<string>) =>{
            state.activeSort = action.payload
        } 
    }
})

export const {setOpenBurger,setOpenSort,setActiveSort} = menuSluce.actions;
export default menuSluce.reducer;