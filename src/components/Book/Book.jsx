import React from "react";
import { images } from "../../constants";
import "./Book.scss";

const Book = () => {
  return (
    <div className="book">
      <div className="book-container">
        <div className="book__card">
          <div className="book-img">
            <img src={images.book} />
          </div>
          <div className="book-title">Lorem ipsum dolorLorem ipsum</div>
        </div>

        <div className="book__card">
          <div className="book-img">
            <img src={images.book} />
          </div>
          <div className="book-title">Lorem ipsum dolorLorem ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
