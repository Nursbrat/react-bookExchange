import "../BooksToTransferPopUp/BooksToTransferPopUp.scss";
import React from "react";
import book from "../../../public/assets/images/book.png";
import { useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../api/apiSlice";

const BookToTransferPopUp = () => {
  const navigate = useNavigate();
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
    return <div>Ошибка: {error.message}</div>;
  }

  const books = booksData.data || [];

  const filteredBooks = books.slice(0, 5);

  return (
    <div className="booktotransfer__popup">
      <div className="booktotransfer__popup__content">
        <h2>Выберите книгу для обмена</h2>

        <div className="booktotransfer__popup__books">
          {filteredBooks.map((books) => (
            <div
              className="booktotransfer__popup__book"
              key={books.id}
              title={books.title}
              onClick={() => navigate(`/book-info/${books.id}`)}
            >
              <div className="booktotransfer__popup__img">
                <img src={book} alt={books.title} />
              </div>
              <p>{books.title}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("/add-book")}>
          Создать новую книгу для обмена
        </button>
      </div>
    </div>
  );
};

export default BookToTransferPopUp;
