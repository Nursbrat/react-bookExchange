import React from "react";
import "./Notfound.scss";
import { images } from "../../constants";

const Notfound = () => {
  const pathName = window.location.pathname;

  return (
    <div className="not-found">
      <img
        src={images.notfound}
        alt="picture, illustration of page not found"
      />

      {pathName === "/my-books" ? (
        <p>Запросов пока нет</p>
      ) : (
        <p>Книги по вашему запросу не найдены</p>
      )}
    </div>
  );
};

export default Notfound;
