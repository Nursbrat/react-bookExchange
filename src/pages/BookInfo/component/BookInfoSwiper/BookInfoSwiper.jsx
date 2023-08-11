import React, { useState } from "react";
import "../BookInfoSwiper/BookInfoSwiper.scss";

const BookInfoSwiper = () => {
  const [activeOption, setActiveOption] = useState(0);
  const options = [
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    },
    {
      backgroundUrl:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
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
