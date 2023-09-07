

// import { AUTH } from '../../api/api';

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    accessToken: JSON.parse(localStorage.getItem("acccessToken")) || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    loading:false
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", action.payload);
      localStorage.setItem("isAuthenticated", true);
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isAuthenticated");
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.user = action.payload;
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     })
  //     .addCase(signup.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(signup.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.user = action.payload;
  //     })
  //     .addCase(signup.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export const { setTokens, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
