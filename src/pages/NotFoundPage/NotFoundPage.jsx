import React from "react";
import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";
import notFound404 from "../../../public/assets/notFound404.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
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
