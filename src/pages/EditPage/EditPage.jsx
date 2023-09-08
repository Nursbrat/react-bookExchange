import React, { useEffect, useState } from "react";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../../api/apiSlice";
import { PiCaretRightBold } from "react-icons/pi";
import { images } from "../../constants";
import { Toaster, toast } from "react-hot-toast";
import "./EditPage.scss";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Получение информации об одной книге
  const { data: book } = useGetBookByIdQuery(id);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const [newBookData, setNewBookData] = useState({
    images: [],
    description: "",
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    language: "",
    condition: "",
  });

  useEffect(() => {
    if (book) {
      setNewBookData({
        images: book.images,
        description: book.description,
        title: book.title,
        author: book.author,
        genre: book.genre,
        publishedYear: book.publishedYear,
        language: book.language,
        condition: book.condition,
      });
    }
  }, [book]);

  const handleNavigateAfterDelay = () => {
    setTimeout(() => {
      navigate(-1);
    }, 4000);
  };

  // inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setNewBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files) {
      const filesArray = [];

      for (const file of files) {
        filesArray.push(file);
      }

      setNewBookData((prevData) => ({
        ...prevData,
        images: filesArray,
      }));
    }
  };

  // submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !newBookData.images.length ||
      !newBookData.description ||
      !newBookData.title ||
      !newBookData.author ||
      !newBookData.genre ||
      !newBookData.language ||
      !newBookData.condition
    ) {
      toast.error("Заполните все поля!");
      return;
    }

    const updatedBook = {
      id: newBookData.id,
      images: newBookData.images,
      description: newBookData.description,
      title: newBookData.title,
      author: newBookData.author,
      genre: newBookData.genre,
      publishedYear: newBookData.publishedYear,
      language: newBookData.language,
      condition: newBookData.condition,
    };
    toast
      .promise(updateBook(updatedBook).unwrap(), {
        loading: "Загрузка...",
        success: () => {
          return <b>Книга успешно обновлена!</b>;
        },
        error: <b>Ошибка при обновлении книги!</b>,
      })
      .then(() => {
        toast("Вас перенаправит на предыдущую страницу!", {
          icon: "🔄",
        });
        handleNavigateAfterDelay();
      });
  };

  return (
    <div>
      <Toaster containerStyle={{ backgroundColor: "transparent" }} />
      <Profcontainer
        pageTitle="Редактировать книгу"
        addBookTitle="Редактировать Книгу"
        addBookSubitle="Измените подробную информацию книги"
      >
        <div className="addBook">
          <div className="addBook-container">
            <div className="addBook__form">
              <div className="addBook__cover">
                <p className="label">
                  Добавьте фото (не более 7){" "}
                  {newBookData.images?.length > 0 ? (
                    <span style={{ fontSize: "1.3rem" }}>
                      ДОБАВЛЕНО ({newBookData.images.length})
                    </span>
                  ) : null}
                </p>
                <label htmlFor="add-picture">
                  <div className="add-picture">
                    <img src={images.img} />
                    <p className="add-picture__descr">Загрузите фотографии</p>
                    <input
                      name="images"
                      type="file"
                      id="add-picture"
                      className="add-file"
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                    />
                  </div>
                </label>
              </div>
              <div className="addBook__description">
                <label className="label">Добавьте описание</label>
                <textarea
                  placeholder="Введите описание книги"
                  className="addBook2__description-input"
                  name="description"
                  value={newBookData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <label htmlFor="book-name">Название</label>
              <input
                type="text"
                id="book-name"
                placeholder="Введите название книги"
                name="title"
                value={newBookData.title}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-author">Автор</label>
              <input
                type="text"
                id="book-author"
                placeholder="Введите имя автора книги"
                name="author"
                value={newBookData.author}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-published-year">Год издания</label>
              <input
                type="text"
                id="book-published-year"
                placeholder="Введите год издания книги"
                name="publishedYear"
                value={newBookData.publishedYear}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="book-language">Язык</label>

              <select
                id="book-language"
                name="language"
                value={newBookData.language}
                onChange={handleInputChange}
              >
                <option value="">Выберите язык</option>
                <option value="Английский">Английский</option>
                <option value="Русский">Русский</option>
                <option value="Кыргызский">Кыргызский</option>
                <option value="Турецкий">Турецкий</option>
                <option value="Казахский">Казахский</option>
                <option value="Итальянский">Итальянский</option>
                <option value="Немецкий">Немецкий</option>
              </select>

              <label htmlFor="book-genre">Жанр</label>
              <select
                id="book-genre"
                name="genre"
                value={newBookData.genre}
                onChange={handleSelectChange}
              >
                <option value="">Выберите жанр</option>
                <option value="Роман">Роман</option>
                <option value="Фэнтези">Фэнтези</option>
                <option value="Приключение">Приключение</option>
                <option value="Детектив">Детектив</option>
                <option value="Научная фантастика">Научная фантастика</option>
                <option value="Ужасы">Ужасы</option>
                <option value="Исторический">Исторический</option>
                <option value="Комедия">Комедия</option>
                <option value="Драма">Драма</option>
                <option value="Биография">Биография</option>
                <option value="Саморазвитие">Саморазвитие</option>
                <option value="Поэзия">Поэзия</option>
              </select>
              <label htmlFor="book-condition">Состояние</label>
              <select
                id="book-condition"
                name="condition"
                value={newBookData.condition}
                onChange={handleSelectChange}
              >
                <option value="">Выберите состояние</option>
                <option value="Хорошее">Хорошее состояние</option>
                <option value="Среднее">Среднее состояние</option>
                <option value="Плохое">Плохое состояние</option>
              </select>

              <div className="step-btn">
                <button
                  type="button"
                  className="next-link"
                  disabled={isLoading}
                  onClick={handleFormSubmit}
                >
                  {isLoading ? "Загрузка..." : "Продолжить"}
                  <PiCaretRightBold className="next-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default EditPage;
