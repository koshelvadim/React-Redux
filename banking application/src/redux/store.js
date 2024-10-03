import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
import usersApiRedicer from "./usersApiReduser";
import usersRedicer from "./usersSlice";
import createMiddleware from "redux-saga";
import userWatcher from "../saga/usersSaga";

const sagaMiddleware = createMiddleware();

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    users: usersRedicer,
    usersApi: usersApiRedicer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userWatcher);

