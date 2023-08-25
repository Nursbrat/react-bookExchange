import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BOOKS } from '../../api/api';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BOOKS }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    signupUser: builder.mutation({
      query: (user) => ({
        url: '/auth/signup',
        method: 'POST',
        body: user
      })
    }),
    googleSignin: builder.mutation({
      query: (tokenId) => ({
        url: '/auth/google',
        method: 'POST',
        body: { tokenId }
      })
    })
  })
});

export const { useLoginUserMutation, useSignupUserMutation, useGoogleSigninMutation } = authApi;

export const { reducer } = authApi;

export const { loginUser, signupUser, googleSignin } = authApi.endpoints;
