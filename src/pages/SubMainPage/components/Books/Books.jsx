import "./Books.scss";
import images from "../../../../constants/images";
import { useGetBooksQuery } from "../../../../api/apiSlice";
import { toggleTheme } from "../../../../features/themeToggle/themeToggleSlice";
import { useSelector, useDispatch } from "react-redux";

const Books = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    console.log(isDarkMode);
  };

  const { data: booksData, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <div>Пожалуйста, подождите...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  const books = booksData || [];

  // const navigate = useNavigate();

  return (
    <div className="books">
      <div className="container">
        <div className="books__genere-text">Поэзия</div>
        <div className="books__content">
          <div className="books__items">
            {books.map((book, index) => (
              <div key={index} className="books__item">
                <img
                  src={book.covers[0] ? book.covers[0] : images.book}
                  alt={book.title}
                />
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleChangeTheme}>tochageColor</button>
    </div>
  );
};

export default Books;
