import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type CartItemType = {
  price: number;
  id: string;
  title: string;
  size: string;
  brand: string;
  imageUrl: string[];
};

export interface cartState {
  openCart: boolean;
  items: CartItemType[];
}

const initialState: cartState = {
  openCart: false,
  items: [],
};

export const postCartItem = createAsyncThunk<CartItemType, CartItemType>(
  "cartItems/postCartItem",
  async (addedItem) => {
    try {
      const { data } = await axios.post(
        `https://650464d5c8869921ae24f99f.mockapi.io/cart`,
        addedItem
      );
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchCartItems = createAsyncThunk<CartItemType>(
  "cartItems/fetchCartItems",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/cart`
      );
      dispatch(setItems(data));
      return data;
    } catch (error) {
        throw error;
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action: PayloadAction<boolean>) => {
      state.openCart = !action.payload;
    },
    setItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addItem: (state, action: PayloadAction<CartItemType>) => {
      state.items.push(action.payload);
    },
  },
});

export const { setOpenCart, addItem, removeItem, setItems } = cartSlice.actions;
export default cartSlice.reducer;
