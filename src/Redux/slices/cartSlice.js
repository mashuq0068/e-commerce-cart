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
    increaseQuantity(state, action) {
      state[action.payload].quantity++
      
    },
    decreaseQuantity(state, action) {
      state[action.payload].quantity--;
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
