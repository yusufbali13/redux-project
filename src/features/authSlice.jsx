import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},

    clearUser: () => {},
  },
});
