import React, { useState } from "react";
import "./BookInfoHeader.scss";

const BookInfoHeader = ({ book }) => {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div className="book__info__header">
      <h2 className="book__info__header-name">{book ? book.title : ""}</h2>

      {isAdded ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 40 40"
          fill="none"
          onClick={() => {
            setIsAdded(false);
          }}
        >
          <path
            d="M28.3333 5H11.6666C9.83325 5 8.34992 6.5 8.34992 8.33333L8.33325 35L19.9999 30L31.6666 35V8.33333C31.6666 6.5 30.1666 5 28.3333 5Z"
            fill="#9933FF"
          />
        </svg>
      ) : (
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="#9933FF"
          xmlns="http://www.w3.org/2000/svg"
          className="book__info__header__bookmark-btn"
          onClick={() => {
            setIsAdded(true);
          }}
        >
          <path
            d="M32.584 5.75H13.4173C11.309 5.75 9.60315 7.475 9.60315 9.58333L9.58398 40.25L23.0007 34.5L36.4173 40.25V9.58333C36.4173 7.475 34.6923 5.75 32.584 5.75ZM32.584 34.5L23.0007 30.3217L13.4173 34.5V9.58333H32.584V34.5Z"
            fill="#9933FF"
          />
        </svg>
      )}
    </div>
  );
};

export default BookInfoHeader;
