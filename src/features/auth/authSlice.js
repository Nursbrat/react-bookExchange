import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH } from '../../api/api';

export const login = createAsyncThunk(
  '/login',
  async ({ email, password }) => {
    const response = await AUTH.post('/login', { email, password });
    return response.data;
  }
);

export const signup = createAsyncThunk(
  '/register',
  async ({ name, email, password, confirmPassword }) => {
    const response = await AUTH.post('/register', {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

