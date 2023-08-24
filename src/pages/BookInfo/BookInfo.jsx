import React, { useState } from "react";
import "./BookInfo.scss";
import RoutesName from "../../components/RoutesName/RoutesName.jsx";
import BookInfoHeader from "./component/BookInfoHeader/BookInfoHeader";
import BookInfoDescription from "./component/BookInfoDescription/BookInfoDescription";
import BookInfoSwiper from "./component/BookInfoSwiper/BookInfoSwiper";
import BookToTransferPopUp from "../../components/BooksToTransferPopUp/BookToTransferPopUp";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../api/apiSlice";

const BookInfo = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  // Получение информации об одной книге
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);

  if (isLoading) {
    return (
      <div
        style={{
          fontSize: "24px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Пожалуйста, подождите...
      </div>
    );
  }

  if (isError) {
    return <div>Ошибка: {isError.message}</div>;
  }

  return (
    <div className="bookinfo">
      <div className="container">
        <RoutesName book={book} />
        <BookInfoHeader book={book} />
        <BookInfoSwiper book={book} />
        <BookInfoDescription book={book} />
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
