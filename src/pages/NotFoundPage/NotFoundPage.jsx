import React from "react";
import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found__container">
      <img
        className="not-found__img"
        src="https://media.istockphoto.com/id/1373078047/vector/book-with-torn-page-404-error-concept-page-not-found.jpg?s=612x612&w=0&k=20&c=5u28EvtVEVD_yKeeAL9Ys15AjLs01So9nzc9H49fenU="
        alt=""
      />
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
};

export default NotFoundPage;
