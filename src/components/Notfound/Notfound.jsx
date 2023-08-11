import React from "react";
import "./Notfound.scss";
import { images } from "../../constants";

const Notfound = () => {
  return (
    <div className="not-found">
      <div className="not-found-img">
        <img
          src={images.notfound}
          alt="picture, illustration of page not found"
        />
      </div>
    </div>
  );
};

export default Notfound;
