import React, { useEffect, useState } from "react";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../../api/apiSlice";
import { PiCaretRightBold } from "react-icons/pi";
import Alert from "../../components/Alert/Alert";
import { images } from "../../constants";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Получение информации об одной книге
  const { data: book } = useGetBookByIdQuery(id);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  // alert
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  // alert
  const [newBookData, setNewBookData] = useState({
    covers: [],
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
        id: book.id,
        covers: book.covers,
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
    }, 3000);
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
        const reader = new FileReader();

        reader.onload = async () => {
          // Прочитать содержимое файла как base64 строку
          const fileContentBase64 = reader.result.split(",")[1];

          filesArray.push({
            name: file.name,
            size: file.size,
            type: file.type,
            content: fileContentBase64,
          });

          // Если все файлы обработаны, обновить состояние
          if (filesArray.length === files.length) {
            setNewBookData((prevData) => ({
              ...prevData,
              covers: filesArray,
            }));
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  // submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !newBookData.covers.length ||
      !newBookData.description ||
      !newBookData.title ||
      !newBookData.author ||
      !newBookData.genre ||
      !newBookData.publishedYear ||
      !newBookData.language ||
      !newBookData.condition
    ) {
      alert("Заполните все поля!");
      return;
    }

    const updatedBook = {
      id: newBookData.id,
      covers: newBookData.covers,
      description: newBookData.description,
      title: newBookData.title,
      author: newBookData.author,
      genre: newBookData.genre,
      publishedYear: newBookData.publishedYear,
      language: newBookData.language,
      condition: newBookData.condition,
    };

    try {
      const response = await updateBook(updatedBook).unwrap();
      console.log("Книга успешно обновлена:", response);
      setShowAlert(true);
      handleNavigateAfterDelay();
    } catch (error) {
      alert("Ошибка при обновлении книги!");
      console.log("Ошибка при обновлении книги!", error);
    }
  };

  return (
    <div>
      {showAlert && <Alert onClose={closeAlert} title={"Успешно изменено!"} />}
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
                  {newBookData.covers.length > 0 ? (
                    <span style={{ fontSize: "1.3rem" }}>
                      ДОБАВЛЕНО ({newBookData.covers.length})
                    </span>
                  ) : null}
                </p>

                {/* {bookData.covers.length > 0 && (
                  <img src={URL.createObjectURL(bookData.covers[0])} alt="" />
                )} */}
                <label htmlFor="add-picture">
                  <div className="add-picture">
                    <img src={images.img} />
                    <p className="add-picture__descr">Загрузите фотографии</p>
                    <input
                      name="covers"
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
