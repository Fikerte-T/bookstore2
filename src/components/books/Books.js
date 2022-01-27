import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div className="book-list">
        {
            books.map((book) => (
              <BooksList
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
              />
            ))
         }

      </div>
      <AddBook />
    </div>
  );
};

export default Books;
