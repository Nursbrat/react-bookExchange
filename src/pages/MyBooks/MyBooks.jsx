import { React, useState } from "react";
import "./MyBooks.scss";
import ProfContainer from "../../components/Profcontainer/Profcontainer";
import Book from "../../components/Book/Book";
import Notfound from "../../components/Notfound/Notfound";

const MyBooks = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className="mybooks">
      <ProfContainer
        pageTitle="Мои книги"
        addBookTitle="Мои книги"
        addBookSubitle="Здесь хранится книги которые вы добавили для обмена"
      >
        {isEmpty ? <Notfound /> : <Book />}
      </ProfContainer>
    </div>
  );
};

export default MyBooks;
