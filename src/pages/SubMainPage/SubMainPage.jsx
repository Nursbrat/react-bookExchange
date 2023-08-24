import React, { useState } from "react";
import Books from "./components/Books/Books";
import Dropdowns from "./components/Dropdowns/Dropdowns";

const SubMainPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  return (
    <div className="submain-page">
      <div className="container">
        <Dropdowns
          selectedLanguage={selectedLanguage}
          selectedGenre={selectedGenre}
          selectedCondition={selectedCondition}
          onLanguageChange={setSelectedLanguage}
          onGenreChange={setSelectedGenre}
          onConditionChange={setSelectedCondition}
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
