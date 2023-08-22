import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { darkModeToggleReducer } from "../features/themeToggle/themeToggleSlice";
import { booksApi } from "./services/booksApi";
=======
import themeToggleSliceReducer from "../features/themeToggle/themeToggleSlice";
>>>>>>> 2f8efae5ab5314f174151a577eeb2a5a7a5b6523


const store = configureStore({
  reducer: {
<<<<<<< HEAD
    darkMode: darkModeToggleReducer,
    [booksApi.reducerPath]: booksApi.reducer,
=======
    theme: themeToggleSliceReducer,
>>>>>>> 2f8efae5ab5314f174151a577eeb2a5a7a5b6523
  },
});

export default store
