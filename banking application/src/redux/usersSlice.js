import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: JSON.parse(localStorage.getItem('USERS') || "[]")
};

const saveToLocalStorage = (users) => {
  localStorage.setItem("USERS", JSON.stringify(users));
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
      saveToLocalStorage(state.users);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload.id);
      saveToLocalStorage(state.users);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
