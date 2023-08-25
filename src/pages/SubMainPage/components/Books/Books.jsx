import "./Books.scss";
import images from "../../../../constants/images";
import { useGetBooksQuery } from "../../../../api/apiSlice";
import { toggleTheme } from "../../../../features/themeToggle/themeToggleSlice";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Books = ({ selectedLanguage, selectedGenre, selectedCondition }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
   
  };

  const { data: booksData, error, isLoading } = useGetBooksQuery();

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
      <div className="container">
        <div className="books__genere-text">
          Жанр: {selectedGenre ? selectedGenre : "не выбран"}
        </div>
        <div className="books__content">
          <div className="books__items">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <div key={index} className="books__item">
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
