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
  genre,
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
      "Поэзия",
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

  const handleGenreChange = (selectedGenre) => {
    onGenreChange(selectedGenre); // Вызываем функцию переданную извне, чтобы обновить состояние в родительском компоненте
  };

  return (
    <div className="dropdowns">
      <div className="container dropdowns__container">
        <div className="dropdowns__content">
          <Dropdown
            options={genres}
            selectedOption={selectedGenre}
            onOptionSelect={handleGenreChange}
            genre={genre}
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
