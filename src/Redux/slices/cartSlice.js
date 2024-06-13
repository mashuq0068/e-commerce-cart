import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // adding product
    addProduct(state, action) {
      state.push(action.payload);
    },
    // removing product
    removeProduct(state, action) {
      state.splice(action.payload, 1);
    },
    // removing all products
    removeAllProducts(state) {
      state.length = 0;
    },
    // increasing quantity
    increaseQuantity(state, action) {
      state[action.payload].quantity++;
    },
    // decreasing quantity
    decreaseQuantity(state, action) {
      state[action.payload].quantity--;
    },
  },
});

export const { addProduct, removeProduct,removeAllProducts, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
