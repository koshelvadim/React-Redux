import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cash: JSON.parse(localStorage.getItem("CASH") || "0"),
};

const saveToLocalStorage = (cash) => {
  localStorage.setItem("CASH", JSON.stringify(cash));
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    addCash: (state, action) => {
      state.cash = state.cash + Number(action.payload);
      saveToLocalStorage(state.cash);
    },
    getCash: (state, action) => {
      state.cash = state.cash - Number(action.payload);
      saveToLocalStorage(state.cash);
    },
  },
});

export const { addCash, getCash } = bankSlice.actions;
export default bankSlice.reducer;
