import { configureStore } from "@reduxjs/toolkit";
import { darkModeToggleReducer } from "../features/themeToggle/themeToggleSlice";
import { booksApi } from "./services/booksApi";

export const store = configureStore({
  reducer: {
    darkMode: darkModeToggleReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
});
