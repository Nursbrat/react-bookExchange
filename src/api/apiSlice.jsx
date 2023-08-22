import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BOOKS } from "./api";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BOOKS }),
  tagTypes: ["Books", "User"],
  endpoints: (builder) => ({
    // Получение списка книг
    getBooks: builder.query({
      query: () => "/books/",
      providesTags: ["Books"],
    }),

    // Создание новой книги
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "/books/",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    // Обновление существующей книги
    updateBook: builder.mutation({
      query: (updatedBook) => ({
        url: `/books/${updatedBook.id}`,
        method: "PUT",
        body: updatedBook,
      }),
      invalidatesTags: ["Books"],
    }),

    // Удаление книги
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = apiSlice;
