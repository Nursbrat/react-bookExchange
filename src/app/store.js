import { configureStore } from "@reduxjs/toolkit";

import { booksApi } from "./services/booksApi";
import themeToggleSliceReducer from "../features/themeToggle/themeToggleSlice";
const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    theme: themeToggleSliceReducer,

  },
});

export default store
