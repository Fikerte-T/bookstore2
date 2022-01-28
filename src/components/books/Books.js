import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { getBooksFromApi } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromApi());
  }, []);

  return (
    <div>
      <div className="book-list">
        {
            books.map((book) => (
              <BooksList
                key={book.item_id}
                id={book.item_id}
                title={book.title}
                category={book.category}
              />
            ))
         }

      </div>
      <AddBook />
    </div>
  );
};

export default Books;
