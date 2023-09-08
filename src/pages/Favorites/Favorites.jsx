import React, { useEffect, useState } from "react";
import "./Favorites.scss";
import Notfound from "../../components/Notfound/Notfound";
import BookCard from "./components/BookCard";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { useGetFavoriteBooksQuery } from "../../api/apiSlice";
import { ColorRing } from "react-loader-spinner";

const Favorites = () => {
  // const { data: booksData, error, isLoading } = useGetFavoriteBooksQuery();

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         height: "400px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <ColorRing
  //         visible={true}
  //         height="90"
  //         width="90"
  //         ariaLabel="blocks-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="blocks-wrapper"
  //         colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  //       />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div
  //       style={{
  //         fontSize: "20px",
  //         height: "400px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       Ошибка: {error.message}
  //     </div>
  //   );
  // }

  // const books = booksData.data || [];

  // local storage
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
    const favoriteBooksArray = Object.values(favorites);
    setFavoriteBooks(favoriteBooksArray);
  }, [favoriteBooks.length]);

  const handleRemoveBookFromFavorites = (bookId) => {
    try {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

      delete favorites[bookId];

      localStorage.setItem("favorites", JSON.stringify(favorites));

      setFavoriteBooks(Object.values(favorites));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mybooks">
      <Profcontainer
        pageTitle="Избранные"
        addBookTitle="Избранные"
        addBookSubitle="Здесь хранятся ваши сохраненные книги"
      >
        <div className="book">
          <div className="book-container">
            {favoriteBooks.length > 0 ? (
              favoriteBooks.map((book) => (
                <BookCard
                  book={book}
                  key={book.id}
                  onRemoveFromFavorites={handleRemoveBookFromFavorites}
                />
              ))
            ) : (
              <Notfound title={"Запросов пока нет"} />
            )}
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Favorites;
