import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';

export interface IProduct {
    id: string,
    title: string,
    sex: string,
    price: string,
    brand: string,
    link: string,
    size: string[],
    type: string,
    category: string,
    imageUrl: string[],
      
}

export interface productState  {
    products: IProduct[],
}

export const fetchAllProducts = createAsyncThunk<IProduct[]>(
    'products/fetchAllProducts',
    async (_, {dispatch}) => {
        try {
            const {data} = await axios.get(`https://650464d5c8869921ae24f99f.mockapi.io/items`);
            dispatch(setProducts(data));
            return data;

        } catch (error) {
            
        }
    }
)

const initialState: productState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
          },
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer