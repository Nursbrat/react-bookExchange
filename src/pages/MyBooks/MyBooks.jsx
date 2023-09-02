import { React, useEffect, useState } from "react";
import "./MyBooks.scss";
import ProfContainer from "../../components/Profcontainer/Profcontainer";
import Book from "../../components/Book/Book";
import Notfound from "../../components/Notfound/Notfound";
import { useGetBooksQuery } from "../../api/apiSlice";

const MyBooks = () => {
  const { data: booksData, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return (
      <div
        style={{
          fontSize: "20px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Пожалуйста, подождите...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          fontSize: "20px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Ошибка: {error.message}
      </div>
    );
  }

  const books = booksData || [];

  return (
    <div className="mybooks">
      <ProfContainer
        pageTitle="Мои книги"
        addBookTitle="Мои книги"
        addBookSubitle="Здесь хранится книги которые вы добавили для обмена"
      >
        <div className="book">
          <div className="book-container">
            {books.length > 0 ? (
              books.map((book) => <Book book={book} key={book.id} />)
            ) : (
              <Notfound title={"Запросов пока нет"} />
            )}
          </div>
        </div>
      </ProfContainer>
    </div>
  );
};

export default MyBooks;
