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
  total: number;
  loading: "loading" | 'fulfilled' | "rejected";
}

const initialState: cartState = {
  openCart: false,
  items: [],
  total: 0,
  loading: "loading"
};

export const postCartItem = createAsyncThunk(
  "cartItems/postCartItem",
  async (addedItem: CartItemType, {rejectWithValue}) => {
    try {
      const { data } = await axios.post(
        `https://650464d5c8869921ae24f99f.mockapi.io/cart`,
        addedItem
      );
      return data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/cart`
      );
      return data;
    } catch (error: any) {
      rejectWithValue(error.response.data);
    }
  }
);

export const removeCartItem = createAsyncThunk(
    "cartItems/removeCartItem",
    async (id: string, { rejectWithValue}) => {
      try {
        const { data } = await axios.delete(`https://650464d5c8869921ae24f99f.mockapi.io/cart/${id}`);
        return data;
      } catch (error: any) {
        rejectWithValue(error.response.data);
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
  extraReducers(builder) {
    builder.addCase(fetchCartItems.pending, (state) =>{
      state.loading = "loading";
      state.items = [];
    }),
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.loading = 'fulfilled';
      state.items = action.payload
    } )
  },
});

export const { setOpenCart, addItem, removeItem, setItems } = cartSlice.actions;
export default cartSlice.reducer;
