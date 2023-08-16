import { createSlice } from "@reduxjs/toolkit";

const darkModeToggleSlice = createSlice({
  name: "darkModeToggle",
  initialState: false,
  reducers: {
    darkModeToggle: (state) => !state,
  },
});

export const { darkModeToggle } = darkModeToggleSlice.actions;

export default darkModeToggleSlice.reducer;
