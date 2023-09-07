import { React, useEffect, useState } from "react";
import "./MyBooks.scss";
import ProfContainer from "../../components/Profcontainer/Profcontainer";
import Book from "../../components/Book/Book";
import Notfound from "../../components/Notfound/Notfound";
import { useGetBooksQuery } from "../../api/apiSlice";
import { ColorRing } from "react-loader-spinner";

const MyBooks = () => {
  const { data: booksData, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return (
      <div
        style={{
          fontSize: "20px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ColorRing
          visible={true}
          height="90"
          width="90"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          fontSize: "20px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`Ошибка при загрузке :(`}
      </div>
    );
  }

  const books = booksData.data || [];

  const myBooks = books.filter((book) => book.user_temp == 2);

  return (
    <div className="mybooks">
      <ProfContainer
        pageTitle="Мои книги"
        addBookTitle="Мои книги"
        addBookSubitle="Здесь хранятся книги которые вы добавили для обмена"
      >
        <div className="book">
          <div className="book-container">
            {myBooks.length > 0 ? (
              myBooks.map((book) => <Book book={book} key={book.id} />)
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
