import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch()
  const {status, books, error} = useSelector(state => state.books)
	useEffect(() => {
		if(status === 'idle'){
			dispatch(fetchBooks())
		}
	}, [status, dispatch])

  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  } else if (status === 'succeeded') {
    // console.log('success')
    // content = <div>succeeded</div>;
    content = 
    <>
      <div className="book-list">
        <BooksList books={books} />
      </div>
      <AddBook />
    </>;
  }

  return (
    <>
      {content}
    </>
  );
};

export default Books;
