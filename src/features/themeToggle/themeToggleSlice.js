import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeToggle",
  initialState: localStorage.getItem("theme") || "dark",
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

