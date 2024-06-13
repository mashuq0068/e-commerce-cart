import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: "",
  reducers: {
    // get searched test
    getSearchedText(state, action) {
      return action.payload;
    },
  },
});
export const { getSearchedText } = searchSlice.actions;
export default searchSlice.reducer;
