import "./Books.scss";
import images from "../../../../constants/images";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../../../api/apiSlice";
import { toggleTheme } from "../../../../features/themeToggle/themeToggleSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Notfound from "../../../../components/Notfound/Notfound";
import { useState } from "react";

const Books = ({ selectedLanguage, selectedGenre, selectedCondition }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log(theme);
  };

  const { data: booksData, error, isLoading } = useGetBooksQuery();
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

  if (isLoading) {
    return <div>Пожалуйста, подождите...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  const books = booksData || [];

  console.log(books);

  // const navigate = useNavigate();
  const filteredBooks = books.filter((book) => {
    const matchesLanguage =
      !selectedLanguage || book.language === selectedLanguage;
    const matchesGenre = !selectedGenre || book.genre === selectedGenre;
    const matchesCondition =
      !selectedCondition || book.condition === selectedCondition;

    return matchesLanguage && matchesGenre && matchesCondition;
  });

  return (
    <div className="books">
      <div className="container books__container">
        <div className={`delete-complete ${isDeleteSuccessful ? "show" : ""}`}>
          Успешно удалено!
        </div>
        <div className="books__genere-text">
          Жанр: {selectedGenre ? selectedGenre : "не выбран"}
        </div>
        <div className="books__content">
          <div className="books__items">
            {searchedBooks.length > 0 ? (
              searchedBooks.map((book, index) => (
                <div key={index} className="books__item" title={book.title}>
                  <img
                    src={
                      book.covers[0]
                        ? `data:${book.covers[0].type};base64,${book.covers[0].content}`
                        : images.book
                    }
                    alt={book.title}
                    onClick={() => navigate(`/book-info/${book.id}`)}
                  />
                  <p onClick={() => navigate(`/book-info/${book.id}`)}>
                    {book.title}
                  </p>
                  <p
                    className="delete-tooltip"
                    onClick={() => handleDeleteBook(book.id)}
                    title={`Удалить "${book.title}"`}
                  >
                    УДАЛИТЬ
                  </p>
                </div>
              ))
            ) : (
              <p>Нет доступных книг по выбранным критериям.</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={handleChangeTheme}>tochageColor</button>
    </div>
  );
};

export default Books;
