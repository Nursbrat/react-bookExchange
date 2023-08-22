import React, { useEffect, useState } from "react";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { images } from "../../constants";
import "./Addbook.scss";
import { PiCaretRightBold } from "react-icons/pi";
import { useCreateBookMutation } from "../../api/apiSlice";
import Alert from "../../components/Alert/Alert";

const Addbook = () => {
  const [createBook, { isLoading }] = useCreateBookMutation();

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const [bookData, setBookData] = useState({
    covers: [],
    description: "",
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    language: "",
    condition: "",
    // user: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedCovers = Array.from(files).slice(0, 7); // Ограничение до 7 файлов
      setBookData((prevData) => ({
        ...prevData,
        covers: selectedCovers,
      }));
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !bookData.description ||
      !bookData.title ||
      !bookData.author ||
      !bookData.genre ||
      !bookData.publishedYear ||
      !bookData.language ||
      !bookData.condition
    ) {
      alert("Заполните все поля!");
      return;
    }

    const newBook = {
      covers: [...bookData.covers],
      description: bookData.description,
      title: bookData.title,
      author: bookData.author,
      genre: bookData.genre,
      publishedYear: bookData.publishedYear,
      language: bookData.language,
      condition: bookData.condition,
      // user: user,
    };

    try {
      const response = await createBook(newBook).unwrap();
      console.log("Книга успешно добавлена:", response);
      setShowAlert(true);
      setBookData({
        covers: [],
        description: "",
        title: "",
        author: "",
        genre: "",
        publishedYear: "",
        language: "",
        condition: "",
        // user: "",
      });
    } catch (error) {
      alert("Ошибка при добавлении книги!");
      console.log("Ошибка при добавлении книги!", error);
    }
  };

  return (
    <div>
      {showAlert && <Alert onClose={closeAlert} />}
      <Profcontainer
        pageTitle="Добавить книги"
        addBookTitle="Добавьте Книгу"
        addBookSubitle="Добавьте подробную информацию книги"
      >
        <div className="addBook">
          <div className="addBook-container">
            <div className="addBook__form">
              <div className="addBook__cover">
                <p className="label">
                  Добавьте фото (не более 7){" "}
                  {bookData.covers.length > 0 ? (
                    <span style={{ fontSize: "1.3rem" }}>
                      ДОБАВЛЕНО ({bookData.covers.length})
                    </span>
                  ) : null}
                </p>

                <label htmlFor="add-picture">
                  <div className="add-picture">
                    <img src={images.img} />
                    <p className="add-picture__descr">Загрузите фотографии</p>
                    <input
                      type="file"
                      id="add-picture"
                      className="add-file"
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                    />
                  </div>
                </label>
              </div>
              <div className="addBook__description">
                <label className="label">Добавьте описание</label>
                <textarea
                  placeholder="Введите описание книги"
                  className="addBook2__description-input"
                  name="description"
                  value={bookData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <label htmlFor="book-name">Название</label>
              <input
                type="text"
                id="book-name"
                placeholder="Введите название книги"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-author">Автор</label>
              <input
                type="text"
                id="book-author"
                placeholder="Введите имя автора книги"
                name="author"
                value={bookData.author}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-published-year">Год издания</label>
              <input
                type="text"
                id="book-published-year"
                placeholder="Введите год издания книги"
                name="publishedYear"
                value={bookData.publishedYear}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-language">Язык</label>

              <select
                id="book-language"
                name="language"
                value={bookData.language}
                onChange={handleInputChange}
              >
                <option value="">Выберите язык</option>
                <option value="eng">Английский</option>
                <option value="rus">Русский</option>
                <option value="kg">Кыргызский</option>
                <option value="tr">Турецкий</option>
                <option value="kz">Казахский</option>
                <option value="it">Итальянский</option>
                <option value="ger">Немецкий</option>
              </select>

              <label htmlFor="book-genre">Жанр</label>
              <select
                id="book-genre"
                name="genre"
                value={bookData.genre}
                onChange={handleSelectChange}
              >
                <option value="">Выберите жанр</option>
                <option value="roman">Роман</option>
                <option value="fantasy">Фэнтези</option>
                <option value="adventure">Приключение</option>
                <option value="mystery">Детектив</option>
                <option value="sci-fi">Научная фантастика</option>
                <option value="thriller">Триллер</option>
                <option value="horror">Ужасы</option>
                <option value="historical">Исторический</option>
                <option value="comedy">Комедия</option>
                <option value="drama">Драма</option>
                <option value="biography">Биография</option>
                <option value="self-help">Саморазвитие</option>
                <option value="travel">Путешествия</option>
                <option value="fiction">Фикшн</option>
              </select>
              <label htmlFor="book-condition">Состояние</label>
              <select
                id="book-condition"
                name="condition"
                value={bookData.condition}
                onChange={handleSelectChange}
              >
                <option value="">Выберите состояние</option>
                <option value="good">Хорошее состояние</option>
                <option value="satisfactory">Среднее состояние</option>
                <option value="bad">Плохое состояние</option>
              </select>

              <div className="step-btn">
                <button
                  type="button"
                  className="next-link"
                  disabled={isLoading}
                  onClick={handleFormSubmit}
                >
                  {isLoading ? "Загрузка..." : "Продолжить"}
                  <PiCaretRightBold className="next-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Addbook;
