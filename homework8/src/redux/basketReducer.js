import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: JSON.parse(localStorage.getItem("BASKET") || "[]"),
};

const saveToLocalStorage = (basket) => {
  localStorage.setItem("BASKET", JSON.stringify(basket));
};

const basketReduser = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = state.basketItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        const quantity = 1;
        const newItem = {...action.payload, quantity};
        state.basketItems = [...state.basketItems, newItem];
      }
      saveToLocalStorage(state.basketItems);
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(state.basketItems);
    },
    updateBasketItemQuantity: (state, action) => {
      const item = state.basketItems.find(
        (item) => item.id === action.payload.product.id
      );
      if(item) {
        item.quantity = action.payload.value;
      };
      saveToLocalStorage(state.basketItems);
    },
    clearBasket: (state) => {
      state.basketItems = [];
      saveToLocalStorage(state.basketItems);
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  updateBasketItemQuantity,
  clearBasket,
} = basketReduser.actions;

export default basketReduser.reducer;
