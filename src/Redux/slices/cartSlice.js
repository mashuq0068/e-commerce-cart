import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllProducts(state) {
      state.length = 0;
    },
    increaseQuantity(state, action) {
      state[action.payload].quantity++;
    },
    decreaseQuantity(state, action) {
      state[action.payload].quantity--;
    },
  },
});

export const { addProduct, removeProduct,removeAllProducts, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
