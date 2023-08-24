import React, { useState } from "react";
import "../BookInfo/BookInfo.scss";
import RoutesName from "../../components/RoutesName/RoutesName.jsx";
import BookInfoHeader from "./component/BookInfoHeader/BookInfoHeader";
import BookInfoDescription from "./component/BookInfoDescription/BookInfoDescription";
import BookInfoSwiper from "./component/BookInfoSwiper/BookInfoSwiper";
import BookToTransferPopUp from "../../components/BooksToTransferPopUp/BookToTransferPopUp";

const BookInfo = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bookinfo">
      <div className="container">
        <RoutesName />
        <BookInfoHeader />
        <BookInfoSwiper />
        <BookInfoDescription />
        <button
          type="button"
          className="bookinfo__button"
          onClick={() => setOpen(!open)}
        >
          Обменять
        </button>
        {open && <BookToTransferPopUp />}
      </div>
    </div>
  );
};

export default BookInfo;
