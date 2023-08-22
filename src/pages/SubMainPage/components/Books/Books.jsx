import "../Books/Books.scss";

import images from "../../../../constants/images";
import { useSelector ,useDispatch} from "react-redux";
import  {toggleTheme} from "../../../../features/themeToggle/themeToggleSlice";




const Books = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.theme);

  const books = [
    { img: images.book, title: "Book Title 1" },
    { img: images.book, title: "Book Title 2" },
  ];
  
const handleChangeTheme = () => {
  dispatch(toggleTheme());
  console.log(isDarkMode)
};

  return (
    <div className="books">
      <div className="container">
        <div
          className="books__genere--text"
        >
          Поэзия
        </div>
        <div className="books__content">
          <div className="books__items">
            {books.map((book, index) => (
              <div key={index} className="books__item">
                <img src={book.img} alt="" />
                <p >
                  {book.title}
                </p>
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
