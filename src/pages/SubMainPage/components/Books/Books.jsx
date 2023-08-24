import "./Books.scss";
import images from "../../../../constants/images";
import { useGetBooksQuery } from "../../../../api/apiSlice";
import { toggleTheme } from "../../../../features/themeToggle/themeToggleSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Notfound from "../../../../components/Notfound/Notfound";

const Books = ({ selectedLanguage, selectedGenre, selectedCondition }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme);

  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log(isDarkMode);
  };

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
        <div className="books__genere-text">
          Жанр: {selectedGenre ? `“${selectedGenre}”` : "не выбран"}
        </div>
        <div className="books__content">
          <div className="books__items">
            {searchedBooks.length > 0 ? (
              searchedBooks.map((book, index) => (
                <div
                  key={index}
                  className="books__item"
                  title={book.title}
                  onClick={() => navigate(`/book-info/${book.id}`)}
                >
                  <img
                    src={
                      book.covers[0]
                        ? `data:${book.covers[0].type};base64,${book.covers[0].content}`
                        : images.book
                    }
                    alt={book.title}
                  />
                  <p>{book.title}</p>
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
