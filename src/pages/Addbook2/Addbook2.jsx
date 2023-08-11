import React from "react";
import "./Addbook2.scss";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { images } from "../../constants";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const Addbook2 = () => {
  return (
    <div>
      <Profcontainer
        pageTitle="Добавить книги"
        addBookTitle="Добавьте Книгу"
        addBookSubitle="Добавьте фотографию и краткое описание книги"
      >
        <div className="addBook2">
          <form className="addBook2__form">
            <div className="addBook2__cover">
              <p className="label">Добавьте фото</p>
              <div className="add-picture">
                <label for="add-picture">
                  <img src={images.img} />
                  <p>Загрузите фотографии</p>
                </label>
                <input type="file" id="add-picture" className="add-file" />
              </div>
            </div>
            <div className="addBook2__description">
              <label className="label">Добавьте описание</label>
              <textarea
                placeholder="Введите описание книги"
                className="addBook2__description-input"
              ></textarea>
            </div>
          </form>
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

export default Addbook2;
