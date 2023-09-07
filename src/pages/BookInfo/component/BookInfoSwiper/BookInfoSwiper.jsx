import "./BookInfoSwiper.scss";

import React, { useState } from "react";

const BookInfoSwiper = ({ book }) => {
  const [activeOption, setActiveOption] = useState(0);
  const options = book.images.map((image, index) => ({ backgroundUrl: image }));

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="bookinfo__swiper">
      <div className="options">
        {options.map(
          (option, index) =>
            option.backgroundUrl && (
              <div
                key={index}
                className={`option ${index === activeOption ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${option.backgroundUrl})`,
                }}
                onClick={() => handleOptionClick(index)}
              ></div>
            )
        )}
      </div>
    </div>
  );
};

export default BookInfoSwiper;
