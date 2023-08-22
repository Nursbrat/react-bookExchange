import React, { useState } from "react";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { images } from "../../constants";
import "./Addbook.scss";
import { PiCaretRightBold } from "react-icons/pi";
import { useCreateBookMutation } from "../../api/apiSlice";

const Addbook = () => {
  const [createBook] = useCreateBookMutation();

  const [bookData, setBookData] = useState({
    covers: [],
    description: "",
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    language: "",
    condition: "",
  });

  const handleInputChange = (e) => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", bookData.description);
    formData.append("title", bookData.title);
    formData.append("author", bookData.author);
    formData.append("genre", bookData.genre);
    formData.append("publishedYear", bookData.publishedYear);
    formData.append("language", bookData.language);
    formData.append("condition", bookData.condition);
    bookData.covers.forEach((cover, index) => {
      formData.append(`cover${index + 1}`, cover); // cover1, cover2, и т.д.
    });

    createBook(formData)
      .unwrap()
      .then((response) => {
        console.log("Книга успешно добавлена:", response);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении книги:", error);
      });
  };

  return (
    <div>
      <Profcontainer
        pageTitle="Добавить книги"
        addBookTitle="Добавьте Книгу"
        addBookSubitle="Добавьте подробную информацию книги"
      >
        <div className="addBook">
          <div className="addBook-container">
            <form className="addBook__form" onSubmit={handleFormSubmit}>
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
              <input
                type="text"
                id="book-language"
                placeholder="Введите на каком языке книги"
                name="language"
                value={bookData.language}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-genre">Жанр</label>
              <select
                id="book-genre"
                name="genre"
                value={bookData.genre}
                onChange={handleInputChange}
              >
                <option value=" " selected>
                  Выберите жанр
                </option>
                <option value="roman">Роман</option>
                <option value="fantasy">Фэнтези</option>
                <option value="adventure">Приключение</option>
              </select>
              <label htmlFor="book-condition">Состояние</label>
              <select
                id="book-condition"
                name="condition"
                value={bookData.condition}
                onChange={handleInputChange}
              >
                <option value=" " selected>
                  Выберите состояние
                </option>
                <option value="good">Хорошее состояние</option>
                <option value="satisfactory">Среднее состояние</option>
                <option value="bad">Плохое состояние</option>
              </select>

              <div className="step-btn">
                <button type="submit" className="next-link">
                  Продолжить
                  <PiCaretRightBold className="next-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Addbook;
