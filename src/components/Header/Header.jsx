import React from "react";
import "./Header.scss";
import { BiSearchAlt2, BiMenu, BiSolidUser } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header__logo">BookShop</div>
        <div className="header__search">
          <form>
            <input
              type="text"
              placeholder="Поиск Книги по автору, названию или жанру"
            />
            <button type="header__search-button">
              <BiSearchAlt2 className="search-icon" />
            </button>
          </form>
        </div>
        <div className="header__navbar">
          <div className="header__navbar-menu">
            <BiMenu className="header-icons menu" />
          </div>

          <div className="header__navbar-user">
            <BiSolidUser className="header-icons profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
