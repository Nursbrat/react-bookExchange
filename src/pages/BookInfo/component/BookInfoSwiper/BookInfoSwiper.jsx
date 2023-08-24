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
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl: book.covers[2]
        ? `data:${book.covers[2].type};base64,${book.covers[2].content}`
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl: book.covers[3]
        ? `data:${book.covers[3].type};base64,${book.covers[3].content}`
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl: book.covers[4]
        ? `data:${book.covers[4].type};base64,${book.covers[4].content}`
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl: book.covers[5]
        ? `data:${book.covers[5].type};base64,${book.covers[5].content}`
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl: book.covers[6]
        ? `data:${book.covers[6].type};base64,${book.covers[6].content}`
        : "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
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
