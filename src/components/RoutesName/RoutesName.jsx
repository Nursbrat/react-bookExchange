import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./RoutesName.scss";

const RoutesName = ({ book }) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const sort = searchParams.get("sort") || "asc";
  // const search = searchParams.get("search") || "";

  // function handleFilterChange(key, value) {
  //   setSearchParams((prevParams) => {
  //     if (value === null) {
  //       prevParams.delete(key);
  //     } else {
  //       prevParams.set(key, value);
  //     }
  //     return prevParams;
  //   });
  // }

  const navigate = useNavigate();

  return (
    <div className="routes__name">
      <h3 className="routes__name-info">
        <span style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
          Вернуться назад
        </span>{" "}
        {">"} {book ? book.title : ""}
      </h3>

      {/* search
      <div className="search-sort">
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
        <select
          value={sort}
          onChange={(e) => handleFilterChange("sort", e.target.value)}
        >
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div> */}
    </div>
  );
};

export default RoutesName;
