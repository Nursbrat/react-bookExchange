import React, { useState } from "react";
import { images } from "../../constants";
import "./Book.scss";
import { useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../../api/apiSlice";
import { Toaster, toast } from "react-hot-toast";

const Book = ({ book }) => {
  const navigate = useNavigate();

  // delete
  const [deleteBookMutation] = useDeleteBookMutation();

  const handleDeleteBook = (bookId) => {
    try {
      toast.promise(deleteBookMutation(bookId), {
        loading: "Загрузка...",
        success: () => {
          return <b>Книга успешно удалена!</b>;
        },
        error: <b>Ошибка при удалении книги!</b>,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // delete

  const truncatedTitle =
    book.title.length > 50 ? book.title.substring(0, 50) + "..." : book.title;

  return (
    <div className="book__card">
      <Toaster containerStyle={{ backgroundColor: "transparent" }} />
      <div className="book-img">
        <img
          src={images.book}
          alt={book.title}
          onClick={() => navigate(`/book-info/${book.id}`)}
        />
      </div>
      <div
        className="book-title"
        onClick={() => navigate(`/book-info/${book.id}`)}
      >
        {truncatedTitle}
      </div>
      <div
        className="edit-tooltip"
        onClick={() => navigate(`/edit-book/${book.id}`)}
        title={`Редактировать "${book.title}"`}
      >
        <svg
          fill="#ffffff"
          height="200px"
          width="200px"
          version="1.1"
          id="Icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M24,19v-2h-2.14c-0.09-0.36-0.24-0.7-0.42-1.02l1.52-1.52l-1.41-1.41l-1.52,1.52c-0.32-0.19-0.66-0.33-1.02-0.42V12h-2v2.14 c-0.36,0.09-0.7,0.24-1.02,0.42l-1.52-1.52l-1.41,1.41l1.52,1.52c-0.19,0.32-0.33,0.66-0.42,1.02H12v2h2.14 c0.09,0.36,0.24,0.7,0.42,1.02l-1.52,1.52l1.41,1.41l1.52-1.52c0.32,0.19,0.66,0.33,1.02,0.42V24h2v-2.14 c0.36-0.09,0.7-0.24,1.02-0.42l1.52,1.52l1.41-1.41l-1.52-1.52c0.19-0.32,0.33-0.66,0.42-1.02H24z M18,20c-1.1,0-2-0.9-2-2 s0.9-2,2-2s2,0.9,2,2S19.1,20,18,20z M11,7.41l3.29,3.29l1.41-1.41L12.41,6L13,5.41l2.29,2.29l1.41-1.41L14.41,4L15,3.41l3.29,3.29 l1.41-1.41L16.41,2l0.29-0.29l-1.41-1.41L6.89,8.7C6.19,8.26,5.38,8,4.5,8C2.02,8,0,10.02,0,12.5S2.02,17,4.5,17S9,14.98,9,12.5 c0-0.88-0.26-1.69-0.7-2.39L11,7.41z M4.5,15C3.12,15,2,13.88,2,12.5S3.12,10,4.5,10S7,11.12,7,12.5S5.88,15,4.5,15z"></path>{" "}
          </g>
        </svg>
      </div>
      <div
        className="delete-tooltip"
        onClick={() => handleDeleteBook(book.id)}
        title={`Удалить "${book.title}"`}
      >
        <svg
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -360.000000)"
                fill="#ffffff"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                    id="delete-[#ffffff]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Book;
