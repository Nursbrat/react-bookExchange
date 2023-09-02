import React from "react";
import "./Notfound.scss";
import { images } from "../../constants";

const Notfound = ({ title }) => {
  return (
    <div className="not-found">
      <img
        src={images.notfound}
        alt="picture, illustration of page not found"
      />

      <p>{title}</p>
    </div>
  );
};

export default Notfound;
