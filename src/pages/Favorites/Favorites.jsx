import React from "react";
import "./Favorites.scss";
import Notfound from "../../components/Notfound/Notfound";
import BookCard from "./components/BookCard";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { useGetFavoriteBooksQuery } from "../../api/apiSlice";

const Favorites = () => {
  const { data: booksData, error, isLoading } = useGetFavoriteBooksQuery();

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

  const books = booksData.data || [];

  return (
    <div className="mybooks">
      <Profcontainer
        pageTitle="Избранные"
        addBookTitle="Избранные"
        addBookSubitle="Здесь хранятся ваши сохраненные книги"
      >
        <div className="book">
          <div className="book-container">
            {books.length > 0 ? (
              books.map((book) => <BookCard book={book} key={book.id} />)
            ) : (
              <Notfound title={"Запросов пока нет"} />
            )}
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Favorites;
