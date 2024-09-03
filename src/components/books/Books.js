import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const { status, books, error } = useSelector((state) => state.books);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = (
      <div display="flex" justify-content="center">
        <Oval
          height="80"
          width="80"
          color="#0290ff"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  } else if (status === 'succeeded') {
    content = (
      <>
        <div className="book-list">
          <BooksList books={books} />
        </div>
        <hr />
        <AddBook />
      </>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

export default Books;
