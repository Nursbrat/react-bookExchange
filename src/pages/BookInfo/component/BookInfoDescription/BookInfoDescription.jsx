import React from "react";
import "./BookInfoDescription.scss";

const BookInfoDescription = ({ book }) => {
  return (
    <>
      <div className="bookinfo__description">
        <h2 className="bookinfo__description__title">Описание</h2>
        <p className="bookinfo__description__details">
          {book ? book.description : ""}
        </p>

        <div className="bookinfo__extrainfo__block">
          <div className="bookinfo__description__data">
            <div className="bookinfo__description__data__cell author">
              <h6>Автор: </h6>
              <p>{book ? book.author : ""}</p>
            </div>
            <div className="bookinfo__description__data__cell ganre">
              <h6>Жанр: </h6>
              <p>{book ? book.genre : ""}</p>
            </div>
            {book.publishedYear ? (
              <div className="bookinfo__description__data__cell published-date">
                <h6>Дата издания: </h6>
                <p>{book ? book.publishedYear : ""}</p>
              </div>
            ) : null}

            <div className="bookinfo__description__data__cell language">
              <h6>Язык: </h6>
              <p> {book ? book.language : ""}</p>
            </div>
            <div className="bookinfo__description__data__cell condition">
              <h6>Состояние: </h6>
              <p>{book ? book.condition : ""}</p>
            </div>
          </div>
          <div className="bookinfo__description__user-info">
            <h5 className="bookinfo__description__user-info__title">
              Данные владельца книги
            </h5>
            <div className="bookinfo__description__user-info__name">
              <h6>Имя:</h6>
              <p>Максим</p>
            </div>
            <div className="bookinfo__description__user-info__rate">
              <h6>Рейтинг:</h6>
              <p>5 звезд</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfoDescription;
