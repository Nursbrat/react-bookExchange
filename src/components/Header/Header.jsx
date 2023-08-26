import { React, useState } from "react";
import "./Header.scss";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { BOOKS } from "../../api/api";
import { useSearchBooksQuery } from "../../api/apiSlice";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeToggle/themeToggleSlice";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeToggle);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };


  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const searchBooksQuery = useSearchBooksQuery();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      await searchBooksQuery.refetch({ searchQuery: searchText });
    } catch (error) {
      console.log(error);
    }
    navigate(`/submain-page?query=${searchText}`);
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="header__logo">
          <img src={images.logo} onClick={() => navigate("/")} />


        </div>
        <div className="header__search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Поиск Книги по автору, названию или жанру"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="header__search-button">
              <BiSearchAlt2 className="search-icon" />
            </button>
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
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li>Главная страница</li>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li>Личный кабинет</li>
            </NavLink>
            <NavLink to="/requests" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li>Запросы на обмен</li>
            </NavLink>
            <NavLink to="/add-book" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li>Добавить свою книгу</li>
            </NavLink>

            <NavLink to="/my-books" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li>Мои книги</li>
            </NavLink>
            <NavLink to="/my-books" className={({ isActive }) =>
              isActive ? "active" : ""
            }>
              <li> Библиотека</li>
            </NavLink>
            {
              <button className="mode-btn" onClick={handleThemeToggle}>
              <input
                type="checkbox"
                id="darkmode-toggle"
                className="mode-input"
              />
              <label className="mode-label" htmlFor="darkmode-toggle">
                <BsSun className="darkmode-toggle-icon sun" />
                <BsMoon className="darkmode-toggle-icon moon" />
              </label>
             
            </button>
            }
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
