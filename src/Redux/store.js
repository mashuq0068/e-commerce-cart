import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchedText: searchSlice,
  },
});
export default store;
