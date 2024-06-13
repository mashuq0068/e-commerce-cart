import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: "",
  reducers: {
    getSearchedText(state, action) {
      state = action?.payload;
    },
  },
});
export const { getSearchedText } = searchSlice.actions;
export default searchSlice.reducer;
