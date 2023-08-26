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
  const isDarkMode = useSelector((state) => state.theme);

  // delete

  // const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(false);

  // const handleDeleteBook = (bookId) => {
  //   deleteBookMutation(bookId)
  //     .then(() => {
  //       setIsDeleteSuccessful(true);
  //       setTimeout(() => {
  //         setIsDeleteSuccessful(false);
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при удалении книги:", error);
  //     });
  // };

  // <div className={`delete-complete ${isDeleteSuccessful ? "show" : ""}`}>
  //         Успешно удалено!
  //       </div>

  // <p
  //   className="delete-tooltip"
  //   onClick={() => handleDeleteBook(book.id)}
  //   title={`Удалить "${book.title}"`}
  // >
  //   УДАЛИТЬ
  // </p>;
  // delete
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const { data: booksData, error, isLoading } = useGetBooksQuery();
  const [deleteBookMutation] = useDeleteBookMutation();

  const [isAddedToFavorites, setIsAddedToFavoritesSuccessful] = useState(false);

  const handleAddToFavorites = () => {
    setIsAddedToFavoritesSuccessful(true);
    setTimeout(() => {
      setIsAddedToFavoritesSuccessful(false);
    }, 2000);
  };

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

  const books = booksData || [];

  const filteredBooks = books.filter((book) => {
    const matchesLanguage =
      !selectedLanguage || book.language === selectedLanguage;
    const matchesGenre = !selectedGenre || book.genre === selectedGenre;
    const matchesCondition =
      !selectedCondition || book.condition === selectedCondition;

    return matchesLanguage && matchesGenre && matchesCondition;
  });

  const searchedBooks = filteredBooks.filter((book) => {
    const lowerQuery = query ? query.toLowerCase() : "";

    const matchesTitle =
      book.title && book.title.toLowerCase().includes(lowerQuery);
    const matchesAuthor =
      book.author && book.author.toLowerCase().includes(lowerQuery);
    const matchesGenre =
      book.genre && book.genre.toLowerCase().includes(lowerQuery);

    return matchesTitle || matchesAuthor || matchesGenre;
  });

  // Если результаты поиска по жанру успешны и есть соответствующий жанр, обновите selectedGenre
  if (searchedBooks.length > 0 && searchedBooks.length < 2) {
    const foundGenre = searchedBooks[0].genre;
    if (foundGenre) {
      selectedGenre = foundGenre;
    }
  }

  return (
    <div className="books">
      <div className="container books__container">
        <div className={`added-complete ${isAddedToFavorites ? "show" : ""}`}>
          Успешно добавлено в библиотеку!
        </div>
        <div className="books__genere-text">
          Жанр: {selectedGenre ? `“${selectedGenre}”` : "не выбран"}
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
                  <div
                    title={`Добавить "${book.title}" в избранное`}
                    className="add-to-favorites__tooltip"
                    onClick={handleAddToFavorites}
                  >
                    {isAddedToFavorites ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="46"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M28.3333 5H11.6666C9.83325 5 8.34992 6.5 8.34992 8.33333L8.33325 35L19.9999 30L31.6666 35V8.33333C31.6666 6.5 30.1666 5 28.3333 5Z"
                          fill="#9933FF"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="#9933FF"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.584 5.75H13.4173C11.309 5.75 9.60315 7.475 9.60315 9.58333L9.58398 40.25L23.0007 34.5L36.4173 40.25V9.58333C36.4173 7.475 34.6923 5.75 32.584 5.75ZM32.584 34.5L23.0007 30.3217L13.4173 34.5V9.58333H32.584V34.5Z"
                          fill="#9933FF"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Notfound />
            )}
          </div>
        </div>
      </div>
      <button onClick={handleChangeTheme}>tochageColor</button>
    </div>
  );
};

export default Books;
