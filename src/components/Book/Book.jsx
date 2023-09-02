import React, { useState } from "react";
import { images } from "../../constants";
import "./Book.scss";
import { useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../../api/apiSlice";

const Book = ({ book }) => {
  const navigate = useNavigate();

  // delete
  const [deleteBookMutation] = useDeleteBookMutation();
  const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(false);

  const handleDeleteBook = (bookId) => {
    deleteBookMutation(bookId)
      .then(() => {
        setIsDeleteSuccessful(true);
        setTimeout(() => {
          setIsDeleteSuccessful(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Ошибка при удалении книги:", error);
      });
  };

  // delete

  const truncatedTitle =
    book.title.length > 50 ? book.title.substring(0, 50) + "..." : book.title;

  return (
    <div className="book__card">
      <div className={`delete-complete ${isDeleteSuccessful ? "show" : ""}`}>
        Успешно удалено!
      </div>
      <div className="book-img">
        <img
          src={
            book.covers[0]
              ? `data:${book.covers[0].type};base64,${book.covers[0].content}`
              : images.book
          }
          alt={book.title}
          onClick={() => navigate(`/book-info/${book.id}`)}
        />
      </div>
      <div
        className="book-title"
        onClick={() => navigate(`/book-info/${book.id}`)}
      >
        {truncatedTitle}
      </div>
      <p
        className="edit-tooltip"
        onClick={() => navigate(`/edit-book/${book.id}`)}
        title={`Редактировать "${book.title}"`}
      >
        ИЗМЕНИТЬ
      </p>
      <p
        className="delete-tooltip"
        onClick={() => handleDeleteBook(book.id)}
        title={`Удалить "${book.title}"`}
      >
        УДАЛИТЬ
      </p>
    </div>

    
  );
};

export default Book;
