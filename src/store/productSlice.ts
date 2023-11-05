import { AppDispatch } from './store';
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
  loading: 'loading' | 'fulfilled' | 'rejected'
}
export type DesignerType ={
  items: string[],
  loading: 'loading' | 'fulfilled' | 'rejected'
}
export type CategoriesType = {
  items: string[],
  loading: 'loading' | 'fulfilled' | 'rejected'
}

export interface productState {
  products: ProductType;
  categories: CategoriesType;
  designers: DesignerType;
}

export type ThunkApiConfig = {
  dispatch: AppDispatch,

}

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://650464d5c8869921ae24f99f.mockapi.io/items');
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data); // Використовуйте rejectWithValue для передачі помилки
    }
  }
);
export const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async () => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items`
      );
      const category = new Set<string>(
        data.map((item: IProduct) => item.category)
      );
      const categories = Array.from(category);
      return categories;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductsByCategories = createAsyncThunk(
  "products/fetchProductsByCategories",
  async (category: string, { rejectWithValue }) => {
    try {
      const {data} = await axios.get(`https://650464d5c8869921ae24f99f.mockapi.io/items?category=${category}`)
      return data
    } catch (error:any) {
      rejectWithValue(error.response.data)   
    }
  }
)

export const fetchAllDesigners = createAsyncThunk(
  "products/fetchAllDesigners",
  async () => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items`
      );
      const designer = new Set<string>(
        data.map((item: IProduct) => item.brand)
      );
      const designers = Array.from(designer);
      return designers;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductsByDesigner = createAsyncThunk(
  "products/fetchProductsByDesigner",
  async (designer: string) => {
    try {
      const {data} = await axios.get(`https://650464d5c8869921ae24f99f.mockapi.io/items?brand=${designer}`);
    return data;
    } catch (error) {
      throw error;
    }
  }
)

export const fetchProductsBySex = createAsyncThunk(
  "products/fetchProductsBySex",
  async (sex: string) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items?sex=${sex}`
      );
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
  categories: {
    items: [],
    loading: 'loading',
  },
  designers: {
    items: [],
    loading: 'loading',
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDesigners: (state, action: PayloadAction<string[]>) => {
      state.designers.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllDesigners.pending, (state) => {
      state.designers.items = [];
      state.designers.loading = 'loading';
    }),
    builder.addCase(fetchAllDesigners.fulfilled, (state,action) => {
      state.designers.items = action.payload;
      state.designers.loading = 'fulfilled';
    }),
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.categories.items = [];
      state.categories.loading = 'fulfilled';
    }),
    builder.addCase(fetchAllCategories.fulfilled, (state,action) => {
      state.categories.items = action.payload;
      state.categories.loading = 'fulfilled';
    }),
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products.items = [];
      state.products.loading = 'loading';
    }),
    builder.addCase(fetchAllProducts.fulfilled, (state,action) => {
      state.products.items = action.payload;
      state.products.loading = 'fulfilled';
    }),
    builder.addCase(fetchProductsBySex.pending, (state) => {
      state.products.items = [];
      state.products.loading = 'loading';
    }),
    builder.addCase(fetchProductsBySex.fulfilled, (state,action) => {
      state.products.items = action.payload;
      state.products.loading = 'fulfilled';
    }),
    builder.addCase(fetchProductsByDesigner.pending, (state) => {
      state.products.items = [];
      state.products.loading = 'loading';
    }),
    builder.addCase(fetchProductsByDesigner.fulfilled, (state,action) => {
      state.products.items = action.payload;
      state.products.loading = 'fulfilled';
    })
  }
});

export const { setDesigners } = productSlice.actions;
export default productSlice.reducer;
