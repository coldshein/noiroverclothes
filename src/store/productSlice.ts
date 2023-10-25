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
export type ProductType = {
  items: IProduct[],
  loading: 'loading' | 'fullfiled' | 'rejected'
}
export type DesignerType ={
  items: string[],
  loading: 'loading' | 'fullfiled' | 'rejected'
}

export interface productState {
  products: ProductType;
  categories: string[];
  designers: DesignerType;
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

export const fetchProductsBySex = createAsyncThunk<IProduct[], string>(
  "products/fetchProductsBySex",
  async (sex, { dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items?sex=${sex}`
      );
      dispatch(setProducts(data));
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
)

const initialState: productState = {
  products: {
    items: [],
    loading: 'loading'
  },
  categories: [],
  designers: {
    items: [],
    loading: 'loading',
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products.items = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setDesigners: (state, action: PayloadAction<string[]>) => {
      state.designers.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.designers.items = [];
      state.designers.loading = 'loading';
    }),
    builder.addCase(fetchAllDesigners.fulfilled, (state,action) => {
      state.designers.items = action.payload;
      state.designers.loading = 'fullfiled';
    }),
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products.items = [];
      state.products.loading = 'loading';
    }),
    builder.addCase(fetchAllProducts.fulfilled, (state,action) => {
      state.products.items = action.payload;
      state.products.loading = 'fullfiled';
    }),
    builder.addCase(fetchProductsBySex.pending, (state) => {
      state.products.items = [];
      state.products.loading = 'loading';
    }),
    builder.addCase(fetchProductsBySex.fulfilled, (state,action) => {
      state.products.items = action.payload;
      state.products.loading = 'fullfiled';
    })
  }
});

export const { setProducts, setCategories, setDesigners } = productSlice.actions;
export default productSlice.reducer;
