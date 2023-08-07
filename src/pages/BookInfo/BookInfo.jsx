import React from "react";
import "../BookInfo/BookInfo.scss";
import RoutesName from "../../components/RoutesName/RoutesName.jsx";
import BookInfoHeader from "./component/BookInfoHeader/BookInfoHeader";
import BookInfoDescription from "./component/BookInfoDescription/BookInfoDescription";
import BookInfoSwiper from "./component/BookInfoSwiper/BookInfoSwiper";

const BookInfo = () => {
  return (
    <div className="book__info">
      <div className="container">
        <RoutesName />
        <BookInfoHeader />
        <BookInfoSwiper />
        <BookInfoDescription />
        <button type="button" className="book__info__button">
          Обменять
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
