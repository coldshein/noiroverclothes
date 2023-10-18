import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProduct {
  id: string;
  title: string;
  sex: string;
  price: string;
  brand: string;
  link: string;
  size: string[];
  type: string;
  category: string;
  imageUrl: string[];
}

export interface productState {
  products: IProduct[];
  categories: string[];
  designers: string[];
}

export const fetchAllProducts = createAsyncThunk<IProduct[]>(
  "products/fetchAllProducts",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items`
      );
      dispatch(setProducts(data));
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const fetchAllCategories = createAsyncThunk<string[]>(
  "products/fetchAllCategories",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items`
      );
      const category = new Set<string>(
        data.map((item: IProduct) => item.category)
      );
      const categories = Array.from(category);
      dispatch(setCategories(categories));
      return categories;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchAllDesigners = createAsyncThunk<string[]>(
  "products/fetchAllDesigners",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items`
      );
      const designer = new Set<string>(
        data.map((item: IProduct) => item.brand)
      );
      const designers = Array.from(designer);
      dispatch(setDesigners(designers))
      return designers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState: productState = {
  products: [],
  categories: [],
  designers: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setDesigners: (state, action: PayloadAction<string[]>) => {
      state.designers = action.payload;
    },
  },
});

export const { setProducts, setCategories, setDesigners } = productSlice.actions;
export default productSlice.reducer;
