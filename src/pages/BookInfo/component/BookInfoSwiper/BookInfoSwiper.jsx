import "./BookInfoSwiper.scss";

import React, { useState } from "react";

const BookInfoSwiper = ({ book }) => {
  const [activeOption, setActiveOption] = useState(0);
  const options = [
    {
      backgroundUrl: book
        ? `data:${book.covers[0].type};base64,${book.covers[0].content}`
        : "",
    },
    {
      backgroundUrl: book.covers[1]
        ? `data:${book.covers[1].type};base64,${book.covers[1].content}`
        : "https://wallpapers.com/images/hd/beige-aesthetic-books-vsase8zsxdglbxna.jpg",
    },
    {
      backgroundUrl: book.covers[2]
        ? `data:${book.covers[2].type};base64,${book.covers[2].content}`
        : "https://images.pexels.com/photos/9066471/pexels-photo-9066471.jpeg?cs=srgb&dl=pexels-yulia-ilina-9066471.jpg&fm=jpg",
    },
    {
      backgroundUrl: book.covers[3]
        ? `data:${book.covers[3].type};base64,${book.covers[3].content}`
        : "https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    },
    {
      backgroundUrl: book.covers[4]
        ? `data:${book.covers[4].type};base64,${book.covers[4].content}`
        : "https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg",
    },
    {
      backgroundUrl: book.covers[5]
        ? `data:${book.covers[5].type};base64,${book.covers[5].content}`
        : "https://theeducationdaily.com/wp-content/uploads/2022/05/Books_HD_8314929977.jpg",
    },
    {
      backgroundUrl: book.covers[6]
        ? `data:${book.covers[6].type};base64,${book.covers[6].content}`
        : "https://miro.medium.com/v2/resize:fit:1400/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",
    },
  ];

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="bookinfo__swiper">
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${index === activeOption ? "active" : ""} `}
            style={{ backgroundImage: `url(${option.backgroundUrl})` }}
            onClick={() => handleOptionClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BookInfoSwiper;
