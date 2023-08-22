import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./services/booksApi";
import themeToggleSliceReducer from "../features/themeToggle/themeToggleSlice";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";



const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeToggleSliceReducer,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store
setupListeners(store.dispatch);

