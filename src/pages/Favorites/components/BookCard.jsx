import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useDeleteBookFromFavoritesMutation } from "../../../api/apiSlice";
import { images } from "../../../constants";
import { ColorRing } from "react-loader-spinner";

const BookCard = ({ book, onRemoveFromFavorites }) => {
  const navigate = useNavigate();
  const [isRemoving, setIsRemoving] = useState(false);

  // delete
  // const [deleteBookFromFavorites] = useDeleteBookFromFavoritesMutation();

  // const handleDeleteBook = (bookId) => {
  //   try {
  //     toast.promise(deleteBookFromFavorites(bookId), {
  //       loading: "Загрузка...",
  //       success: () => {
  //         return <b>Книга успешно удалена из избранных!</b>;
  //       },
  //       error: <b>Ошибка при удалении книги!</b>,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // delete

  // local storage
  const handleRemoveBookFromFavorites = () => {
    onRemoveFromFavorites(book.id);
  };

  const truncatedTitle =
    book.title.length > 50 ? book.title.substring(0, 50) + "..." : book.title;

  return (
    <div className="book__card">
      <Toaster containerStyle={{ backgroundColor: "transparent" }} />
      <div className="book-img">
        <img
          src={book.images[0]}
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
        className="delete-tooltip"
        onClick={handleRemoveBookFromFavorites}
        title={`Удалить "${book.title}" из избранных`}
      >
        {isRemoving ? (
          <div
            style={{
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ColorRing
              visible={true}
              height="90"
              width="90"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default BookCard;
