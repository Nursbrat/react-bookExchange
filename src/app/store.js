import { configureStore } from "@reduxjs/toolkit";
import themeToggleSliceReducer from "../features/themeToggle/themeToggleSlice";


const store = configureStore({
  reducer: {
    theme: themeToggleSliceReducer,
  },
});

export default store
