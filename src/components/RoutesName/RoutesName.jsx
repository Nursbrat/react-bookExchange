import React from "react";
import { useSearchParams } from "react-router-dom";

const RoutesName = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "asc";
  const search = searchParams.get("search") || "";

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="routes__name">
      <h3 className="routes__name-info">
        Главная {">"} Богатый папа, Бедный папа
      </h3>

      {/* search */}
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
      </div>
    </div>
  );
};

export default RoutesName;
