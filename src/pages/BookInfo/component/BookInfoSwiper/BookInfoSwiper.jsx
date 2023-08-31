import "./BookInfoSwiper.scss";

import React, { useState } from "react";

const BookInfoSwiper = ({ book }) => {
  const [activeOption, setActiveOption] = useState(0);
  const options = [
    {
      backgroundUrl:
        "https://www.newarab.com/sites/default/files/media/images/15FB6C3F-ED4B-4157-8B01-B7247D468CC2.jpg",
    },
    {
      backgroundUrl:
        "https://wallpapers.com/images/hd/beige-aesthetic-books-vsase8zsxdglbxna.jpg",
    },
    {
      backgroundUrl:
        "https://images.pexels.com/photos/9066471/pexels-photo-9066471.jpeg?cs=srgb&dl=pexels-yulia-ilina-9066471.jpg&fm=jpg",
    },
    {
      backgroundUrl:
        "https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    },
    {
      backgroundUrl:
        "https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg",
    },
    {
      backgroundUrl:
        "https://theeducationdaily.com/wp-content/uploads/2022/05/Books_HD_8314929977.jpg",
    },
    {
      backgroundUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",
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
            style={{
              backgroundImage: `url(${option.backgroundUrl})`,
            }}
            onClick={() => handleOptionClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BookInfoSwiper;
