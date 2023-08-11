import React from "react";
import book from "../../assets/book.png";
import "../BooksToTransferPopUp/BooksToTransferPopUp.scss";

const BookToTransferPopUp = () => {
  return (
    <div className="booktotransfer__popup">
      <div className="booktotransfer__popup__content">
        <h2>Выберите книгу для обмена</h2>
        <div className="booktotransfer__popup__books">
          <div className="booktotransfer__popup__book">
            <div className="booktotransfer__popup__img">
              <img src={book} alt="" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="booktotransfer__popup__book">
            <div className="booktotransfer__popup__img">
              <img src={book} alt="" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div> <div className="booktotransfer__popup__book">
            <div className="booktotransfer__popup__img">
              <img src={book} alt="" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <button>
        Создать новую книгу для обмена
        </button>
      </div>
    </div>
  );
};

export default BookToTransferPopUp;
