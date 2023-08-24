import React, { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import "../Dropdowns/Dropdowns.scss";

const Dropdowns = ({
  selectedLanguage,
  selectedGenre,
  selectedCondition,
  onLanguageChange,
  onGenreChange,
  onConditionChange,
}) => {
  const genres = {
    options: [
      null,
      "Роман",
      "Фэнтези",
      "Приключение",
      "Детектив",
      "Научная фантастика",
      "Ужасы",
      "Исторический",
      "Комедия",
      "Драма",
      "Биография",
      "Саморазвитие",
      "Фикшн",
    ],
    name: "Жанр",
  };

  const languages = {
    options: [
      null, // Значение для сброса фильтрации
      "Английский",
      "Русский",
      "Кыргызский",
      "Турецкий",
      "Казахский",
      "Итальянский",
      "Немецкий",
    ],
    name: "Язык",
  };

  const conditions = {
    options: [
      null, // Значение для сброса фильтрации
      "Хорошее",
      "Среднее",
      "Плохое",
    ],
    name: "Состояние",
  };

  return (
    <div className="dropdowns">
      <div className="container">
        <div className="dropdowns__content">
          <Dropdown
            options={genres}
            selectedOption={selectedGenre}
            onOptionSelect={onGenreChange}
          />
          <Dropdown
            options={languages}
            selectedOption={selectedLanguage}
            onOptionSelect={onLanguageChange}
          />
          <Dropdown
            options={conditions}
            selectOption={selectedCondition}
            onOptionSelect={onConditionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
