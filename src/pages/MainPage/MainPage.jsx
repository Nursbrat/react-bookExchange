import "../MainPage/MainPage.scss";

import React, { useEffect } from "react";

import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main"> 
      
      <div className="container">
        <div className="main__content">
          <div
            className="main__hero"
            style={{
              backgroundImage: `url(${images.hero})`,
            }}
          >
            <div className="main__hero__content">
              <h1>Обменивайся книгами с “BookShop”</h1>
              <button onClick={() => navigate("/submain-page/")}>
                Начать поиск
              </button>
            </div>
          </div>

          <div className="main__genres">
            <div className="main__genre">
              <img
                src={images.romance}
                alt="romance"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Роман")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.triller}
                alt="triller"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Детектив")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.fantasy}
                alt="fantasy"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Фэнтези")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.scifi}
                alt="scifi"
                onClick={() =>
                  navigate(
                    `/submain-page/${encodeURIComponent("Научная фантастика")}`
                  )
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.horror}
                alt="horror"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Ужасы")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.poem}
                alt="poem"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Поэзия")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.drama}
                alt="drama"
                onClick={() =>
                  navigate(`/submain-page/${encodeURIComponent("Драма")}`)
                }
              />
            </div>
            <div className="main__genre">
              <img
                src={images.finance}
                alt="finance"
                onClick={() =>
                  navigate(
                    `/submain-page/${encodeURIComponent("Саморазвитие")}`
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
