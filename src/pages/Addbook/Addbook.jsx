import React from "react";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { images } from "../../constants";
import "./Addbook.scss";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const Addbook = () => {
  return (
    <div>
      <Profcontainer
        pageTitle="Добавить книги"
        addBookTitle="Добавьте Книгу"
        addBookSubitle=" Добавьте подробную информацию книги"
      >
        <div className="addBook">
          <div className="addBook-container">
            <form className="addBook__left">
              <label htmlFor="book-name">Название</label>
              <input
                type="text"
                name="book-name"
                id="book-name"
                placeholder="Введите название книги"
                required
              />
              <label htmlFor="book-author">Автор</label>
              <input
                type="text"
                name="book-author"
                id="book-author"
                placeholder="Введите имя автора книги"
                required
              />
              <label htmlFor="book-genre">Жанр</label>
              <input
                type="text"
                name="book-genre"
                id="book-genre"
                placeholder="Введите жанр книги"
                required
              />
              <label htmlFor="book-published-year">Год издания</label>
              <input
                type="text"
                name="book-published-year"
                id="book-published-year"
                placeholder="Введите год издания книги"
                required
              />
              <label htmlFor="book-language">Язык</label>
              <input
                type="text"
                name="book-language"
                id="book-language"
                placeholder="Введите на каком языке книги"
                required
              />
              <label htmlFor="book-condition">Состояние</label>
              <select id="book-condition" name="book-condition">
                <option value=" " selected>
                  Выберите состояние
                </option>
                <option value="good">хорошее состояние</option>
                <option value="satisfactory">среднее состояние</option>
                <option value="bad">плохое состояние</option>
              </select>
            </form>
            <div className="addBook__right">
              <img src={images.addbook} />
            </div>
          </div>
          <div className="steps-btn">
            <div className="back-link">
              <a>
                <PiCaretLeftBold className="back-icon" />
              </a>
              <p>Назад</p>
            </div>
            <button className="next-link">
              Продолжить
              <PiCaretRightBold className="next-icon" />
            </button>
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Addbook;
