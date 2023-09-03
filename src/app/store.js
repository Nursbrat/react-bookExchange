import { configureStore } from "@reduxjs/toolkit";
// import { booksApi } from "./services/booksApi";
import themeToggleSliceReducer from "../features/themeToggle/themeToggleSlice";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { signupUser } from "../features/auth/singupUser";
// import {authSlice} from '../features/auth/authSlice'



const store = configureStore({
  reducer: {
    // [booksApi.reducerPath]: booksApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [authSlice.reducerPath]:authSlice.reduer,
    theme: themeToggleSliceReducer,
    signupUser: signupUser.reducer
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store
setupListeners(store.dispatch);

  