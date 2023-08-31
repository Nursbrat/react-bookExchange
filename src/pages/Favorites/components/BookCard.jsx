import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDeleteBookFromFavoritesMutation } from "../../../api/apiSlice";
import { images } from "../../../constants";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  // delete
  const [deleteBookFromFavorites] = useDeleteBookFromFavoritesMutation();

  const handleDeleteBook = (bookId) => {
    try {
      toast.promise(deleteBookFromFavorites(bookId), {
        loading: "Загрузка...",
        success: () => {
          return <b>Книга успешно удалена из избранных!</b>;
        },
        error: <b>Ошибка при удалении книги!</b>,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // delete

  const truncatedTitle =
    book.title.length > 50 ? book.title.substring(0, 50) + "..." : book.title;

  return (
    <div className="book__card">
      <Toaster containerStyle={{ backgroundColor: "transparent" }} />
      <div className="book-img">
        <img
          src={images.book}
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
        className="delete-tooltip"
        onClick={() => handleDeleteBook(book.id)}
        title={`Удалить "${book.title}" из Избранных`}
      >
        УДАЛИТЬ
      </p>
    </div>
  );
};

export default BookCard;
