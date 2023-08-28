import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

 


  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer__blog">
          <img
            src={images.logo}
            alt="logo"
            className="footer-logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="footer__blog">
          <h3>Жанры:</h3>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Роман")}`)
            }
          >
            Роман:
          </li>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Детектив")}`)
            }
          >
            Детектив / Триллер:
          </li>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Фэнтези")}`)
            }
          >
            Фэнтези:
          </li>
          <li
            onClick={() =>
              navigate(
                `/submain-page/${encodeURIComponent("Научная фантастика")}`
              )
            }
          >
            Научная фантастика:
          </li>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Ужасы")}`)
            }
          >
            Ужасы:
          </li>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Поэзия")}`)
            }
          >
            Поэзия:
          </li>
          <li
            onClick={() =>
              navigate(`/submain-page/${encodeURIComponent("Драма")}`)
            }
          >
            Драма:
          </li>
        </div>
        <div className="footer__blog">
          <h3>Контакты:</h3>
          <div className="phone">
            <p>Телефон</p>
            <div className="phone__numbers">
              <p>+996 (_ _ _) _ _- _ _-_ _</p>
              <p>+996 (_ _ _) _ _- _ _-_ _</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>&copy; 2023 BookShop</p>
      </div>
    </div>
  );
};

export default Footer;
