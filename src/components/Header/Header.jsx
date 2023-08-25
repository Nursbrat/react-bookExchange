import { React, useState } from "react";
import "./Header.scss";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";
import { BOOKS } from "../../api/api";
import { useSearchBooksQuery } from "../../api/apiSlice";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
          <form>
            <button onClick={handleSearch} type="header__search-button">
              <BiSearchAlt2 className="search-icon" />
            </button>
            <input
              type="text"
              placeholder="Поиск Книги по автору, названию или жанру"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
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
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
