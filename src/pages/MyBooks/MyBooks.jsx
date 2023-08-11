import React from "react";
import "./MyBooks.scss";
import ProfContainer from "../../components/Profcontainer/Profcontainer";

const MyBooks = () => {
  return (
    <div>
      <ProfContainer
        pageTitle="Мои книги"
        addBookTitle="Мои книги"
        addBookSubitle="Здесь хранится книги которые вы добавили для обмена"
      ></ProfContainer>
    </div>
  );
};

export default MyBooks;
