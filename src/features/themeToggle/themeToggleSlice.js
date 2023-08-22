import { createSlice } from "@reduxjs/toolkit";
// import { useTheme } from "../../hooks/useTheme";




const themeSlice = createSlice({
  name: "themeToggle",
  initialState:'dark',
  reducers: {
    toggleTheme: (state) => state=state==='light'?'dark':'light'
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
