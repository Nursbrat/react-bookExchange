import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getBook: builder.query({
      query: (product) => `books/search?q=${search}`,
    }),
    addBook: builder.mutation({
      query: (book) => ({
        url: "/urlof book post",
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = booksApi;
