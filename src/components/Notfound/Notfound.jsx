import React from "react";
import "./Notfound.scss";
import { images } from "../../constants";

const Notfound = () => {
  return (
    <div className="not-found">
      <img
        src={images.notfound}
        alt="picture, illustration of page not found"
      />
      <p>Книги по вашему запросу не найдены</p>
    </div>
  );
};

export default Notfound;
