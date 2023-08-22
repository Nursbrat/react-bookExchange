import React from "react";
import "../BookInfoDescription/BookInfoDescription.scss";

const BookInfoDescription = () => {
  return (
    <>
      <div className="bookinfo__description">
        <h2 className="bookinfo__description__title">Описание</h2>
        <p className="bookinfo__description__details">
          "Бедный папа, богатый папа" – это книга, написанная Робертом Кийосаки,
          которая продвигает взгляд на финансовое образование и подход к
          управлению государством. Книга рассказывает о двух разных подходах к
          финансам, представленных через две жизни "отцов" - отец отца, который
          был самым большим, но ограниченным в финансовом отношении к деньгам, и
          друг его отца, который, хотя и не обладал богатством, но обладал более
          умным подходом к деньгам . Автор вводит ключи и пассивы и разъясняет,
          почему разница в концепции этого понятий может иметь огромное значение
          для фина
        </p>

        <div className="bookinfo__extrainfo__block">

        <div className="bookinfo__description__data">
            <div className="bookinfo__description__data__cell author">
              <h6>Автор: </h6>
              <p>Роберт Кийосаки</p>
            </div>
            <div className="bookinfo__description__data__cell ganre">
              <h6>Жанр: </h6>
              <p> Литература по финансам и саморазвитию</p>
            </div>
            <div className="bookinfo__description__data__cell published-date">
              <h6>Год издания: </h6>
              <p> 1997</p>
            </div>
            <div className="bookinfo__description__data__cell language">
              <h6>Язык:</h6>
              <p>Русский</p>
            </div>
            <div className="bookinfo__description__data__cell condition">
              <h6>Состояние: </h6>
              <p>Новый</p>
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
