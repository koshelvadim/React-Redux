import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",
  initialState: {
    cash: 100,
  },
  reducers: {
    addCash: (state, action) => {
      state.cash = state.cash + action.payload;
    },
    getCash: (state, action) => {
      state.cash = state.cash - action.payload;
    },
  },
});

export const { addCash, getCash } = bankSlice.actions;
export default bankSlice.reducer;
