import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistore: (state, action) => {
      const product = action.payload;
      state.list.push(product);
    },
  },
});

export const { addHistore } = historySlice.actions;
export default historySlice.reducer;
