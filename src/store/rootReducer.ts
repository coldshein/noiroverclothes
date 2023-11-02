import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import burgerReducer from "./burgerSlice";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  burger: burgerReducer,
});
export default rootReducer;