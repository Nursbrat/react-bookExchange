import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BOOKS } from './api'

export const apiSlice = createApi({
    reducerPath: 'api/books',
    baseQuery: fetchBaseQuery({ baseUrl: BOOKS }),
    tagTypes: ['Books', 'User'],
    endpoints: builder => ({
        
    })
})