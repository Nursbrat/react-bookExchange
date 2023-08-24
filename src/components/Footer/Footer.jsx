import React from "react";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer__blog">
          <img src={images.logo} alt="logo" className="footer-logo" />
        </div>
        <div className="footer__blog">
          <h3>Жанры:</h3>
          <li>Роман:</li>
          <li>Детектив / Триллер:</li>
          <li>Фэнтези:</li>
          <li>Научная фантастика:</li>
          <li>Ужасы:</li>
          <li>Поэзия:</li>
          <li>Драма:</li>
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
