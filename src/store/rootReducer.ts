import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  menu: menuReducer,
});
export default rootReducer;