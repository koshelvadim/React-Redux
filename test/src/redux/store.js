import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
import usersRedicer from "./usersSlice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    users: usersRedicer,
  }
});

