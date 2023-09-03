import React, { useEffect, useState } from "react";
import Books from "./components/Books/Books";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useSearchBooksQuery } from "../../api/apiSlice";


const SubMainPage = () => {
  const { genre } = useParams();
  const [selectedGenre, setSelectedGenre] = useState(genre);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");


  // Функция для обновления выбранного жанра
  const handleGenreChange = (genre) => {

   
    setSelectedGenre(genre);
  };
;

  return (
    <div className="submain-page">
     
      <div className="container">
        <Dropdowns
          selectedLanguage={selectedLanguage}
          selectedGenre={selectedGenre}
          selectedCondition={selectedCondition}
          onLanguageChange={setSelectedLanguage}
          onGenreChange={handleGenreChange}
          onConditionChange={setSelectedCondition}
          genre={genre}
        />
        <Books
          selectedLanguage={selectedLanguage}
          selectedGenre={selectedGenre}
          selectedCondition={selectedCondition}
        />
      </div>
    </div>
  );
};

export default SubMainPage;
