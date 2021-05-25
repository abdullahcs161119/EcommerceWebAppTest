import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    login: {
      reducer: (state, action) => {
        state.token = action.payload;
      },
    },
    logout: {
      reducer: (state) => {
        state.token = null;
      },
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
