
import {configureStore} from '@reduxjs/toolkit';
import { darkModeToggleReducer } from '../features/themeToggle/themeToggleSlice';

export const store=configureStore({
reducer:{
    darkMode:darkModeToggleReducer,
  
}
})