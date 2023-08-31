import React, { useEffect, useState } from "react";
import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";
import notFound404 from "../../../public/assets/notFound404.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books/")
      .then((response) => response.json())
      .then((data) => setBooks(data.data));
  }, []);

  // console.log(books);

  return (
    <div className="not-found__container fullscreen">
      <img className="not-found__img" src={notFound404} alt="" />
      <p>
        <b>404</b>: Пропавшая Страница Книги
      </p>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
};

export default NotFoundPage;
