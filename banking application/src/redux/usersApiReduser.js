import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersApi: [],
  loading: false,
  error: null,
};

const usersApiSlice = createSlice({
  name: "usersApi",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.usersApi = action.payload;
    },

    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  usersApiSlice.actions;
export default usersApiSlice.reducer;
