import "./Books.scss";
import images from "../../../../constants/images";
import {
  // useAddToFavoriteMutation,
  useGetBooksQuery,
} from "../../../../api/apiSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Notfound from "../../../../components/Notfound/Notfound";
import { Toaster, toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

const Books = ({ selectedLanguage, selectedGenre, selectedCondition }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const { data: booksData, error, isLoading } = useGetBooksQuery();
  // const [addToFavoriteMutation] = useAddToFavoriteMutation();

  // const handleAddToFavorites = (bookId) => {
  //   toast.promise(addToFavoriteMutation(bookId).unwrap(), {
  //     loading: "Загрузка...",
  //     success: () => {
  //       return <b>Книга успешно добавлена в избранное!</b>;
  //     },
  //     error: <b>Ошибка при добавлении книги в избранное!</b>,
  //   });
  // };

  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return (
      <div
        style={{
          fontSize: "20px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`Ошибка при загрузке :(`}
      </div>
    );
  }

  const books = booksData.data || [];

  const filteredBooks = books.filter((book) => {
    const matchesLanguage =
      !selectedLanguage || book.language === selectedLanguage;
    const matchesGenre = !selectedGenre || book.genre === selectedGenre;
    const matchesCondition =
      !selectedCondition || book.condition === selectedCondition;

    return matchesLanguage && matchesGenre && matchesCondition;
  });

  const searchedBooks = filteredBooks.filter((book) => {
    const lowerQuery = query ? query.toLowerCase() : "";

    const matchesTitle =
      book.title && book.title.toLowerCase().includes(lowerQuery);
    const matchesAuthor =
      book.author && book.author.toLowerCase().includes(lowerQuery);
    const matchesGenre =
      book.genre && book.genre.toLowerCase().includes(lowerQuery);

    return matchesTitle || matchesAuthor || matchesGenre;
  });

  // Если результаты поиска по жанру успешны и есть соответствующий жанр, обновите selectedGenre
  if (searchedBooks.length > 0 && searchedBooks.length < 2) {
    const foundGenre = searchedBooks[0].genre;
    if (foundGenre) {
      selectedGenre = foundGenre;
    }
  }

  // favorites local storage
  const addToFavorites = (book) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    if (!favorites[book.id]) {
      favorites[book.id] = book;

      localStorage.setItem("favorites", JSON.stringify(favorites));

      toast.success(`Книга "${book.title}" успешно добавлена в избранное!`);
    } else {
      toast.error(`Книга "${book.title}" уже добавлена в избранное!`);
    }
  };

  const handleAddToFavorites = (book) => {
    addToFavorites(book);
  };

  // favorites local storage

  return (
    <div className="books">
      <div className="container books__container">
        <Toaster containerStyle={{ backgroundColor: "transparent" }} />
        <div className="books__genere-text">
          Жанр: {selectedGenre ? `“${selectedGenre}”` : "не выбран"}
        </div>
        <div className="books__content">
          <div className="books__items">
            {searchedBooks.length > 0 ? (
              searchedBooks.map((book, index) => (
                <div key={index} className="books__item" title={book.title}>
                  <img
                    src={book.images[0] ? book.images[0] : images.book}
                    alt=""
                    onClick={() => navigate(`/book-info/${book.id}`)}
                  />
                  <p onClick={() => navigate(`/book-info/${book.id}`)}>
                    {book.title}
                  </p>
                  <div
                    title={`Добавить "${book.title}" в избранное`}
                    className="add-to-favorites__tooltip"
                    onClick={() => handleAddToFavorites(book)}
                  >
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="#9933FF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.584 5.75H13.4173C11.309 5.75 9.60315 7.475 9.60315 9.58333L9.58398 40.25L23.0007 34.5L36.4173 40.25V9.58333C36.4173 7.475 34.6923 5.75 32.584 5.75ZM32.584 34.5L23.0007 30.3217L13.4173 34.5V9.58333H32.584V34.5Z"
                        fill="#9933FF"
                      />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <Notfound title={"Книги по вашему запросу не найдены"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
