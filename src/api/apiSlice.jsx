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

    // информация об одной книге
    getBookById: builder.query({
      query: (bookId) => `/books/${bookId}`,
      providesTags: (result, error, bookId) => [{ type: "Books", id: bookId }],
    }),

    // Поиск книг по заданному поисковому запросу
    searchBooks: builder.query({
      query: (searchQuery) => `/books/?search=${searchQuery}`,
      providesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useSearchBooksQuery,
} = apiSlice;
