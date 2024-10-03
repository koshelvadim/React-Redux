import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./basketReducer";

const store = configureStore({
  reducer: {
    basketItems: basketReducer,
  }
});

export default store;