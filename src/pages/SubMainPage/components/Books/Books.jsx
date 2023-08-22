import "./Books.scss";
import images from "../../../../constants/images";
import { useGetBooksQuery } from "../../../../api/apiSlice";
// import { useSelector } from "@reduxjs/toolkit";

const Books = () => {
  // const dispatch = useDispatch()
  //   const isDarkMode = useSelector((state) => state.darkMode);
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
        <div
          // className={`'books__genere-text'${isDarkMode ? "dark-mode" : ""}`}
          className="books__genere-text"
        >
          Поэзия
        </div>
        <div className="books__content">
          <div className="books__items">
            {books.map((book, index) => (
              <div key={index} className="books__item">
                <img src={book.img ? book.img : images.book} alt={book.title} />
                <p
                // className={`'${isDarkMode ? "dark-mode" : ""}`}
                >
                  {book.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
