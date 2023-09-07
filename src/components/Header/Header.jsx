import { React, useState } from "react";
import "./Header.scss";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeToggle/themeToggleSlice";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [switched, setSwitched] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeToggle);
  const handleThemeToggle = () => {
    setSwitched(!switched);
    dispatch(toggleTheme());
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header__logo">
          <img src={images.logo} onClick={() => navigate("/")} />
        </div>
        <div className="header__search">
          <form>
            <button type="header__search-button">
              <BiSearchAlt2 className="search-icon" />
            </button>
            <input
              type="text"
              placeholder="Поиск Книги по автору, названию или жанру"
            />
          </form>
        </div>

        <div className="header__navbar-user">
          {toggleMenu ? (
            <AiOutlineClose
              className="header-icons profile"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <BiMenu
              className="header-icons profile"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>

      {toggleMenu && (
        <div className="header__navbar">
          <ul>
            <Link to="/">
              <li>Главная страница</li>
            </Link>
            <Link to="/profile">
              <li>Личный кабинет</li>
            </Link>
            <Link to="/requests">
              <li>Запросы на обмен</li>
            </Link>
            <Link to="/add-book">
              <li>Добавить свою книгу</li>
            </Link>

            <Link to="/my-books">
              <li>Мои книги</li>
            </Link>
            <Link to="/my-books">
              <li> Библиотека</li>
            </Link>

            <label className="switch" for="darkmode-toggle">
              <input
                type="checkbox"
                id="darkmode-toggle"
                className="mode-input"
                checked={switched}
                onChange={handleThemeToggle}
              />

              {theme}
              <span className="slider"></span>
            </label>
          </ul>
        </div>
      )}
      <div className={`navbar ${theme === "dark" ? "dark-mode" : ""}`}>
        {/* ... */}
      </div>
    </div>
  );
};

export default Header;
