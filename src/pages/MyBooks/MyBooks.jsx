import { React, useEffect, useState } from "react";
import "./MyBooks.scss";
import ProfContainer from "../../components/Profcontainer/Profcontainer";
import Book from "../../components/Book/Book";

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/books/')
      .then((response) => response.json())
      .then((data) => setBooks(data.data));
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBooks;
