import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BooksList = ({ books }) => {
  const [author] = useState('Haddis Alemayehu');
  const percentage = 60;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  // const updateBook = (id) => {
  //   dispatch(updateBook(id))
  // }
  return (
    <div className="books-container">
      {books.map((book) => (
        <div key={book.item_id}>
          <div className="book-info">
            <div className="books">
              <p className="book-category">{book.category}</p>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{author}</p>
            </div>
            <div className="util-btn-container">
              <button className="util-btn" type="button">Comments</button>
              <button className="util-btn" type="button" onClick={() => removeBookFromStore(book.item_id)}>Remove</button>
              {/* <Link className='util-btn' to={`/editBook/${book.item_id}`}>Edit</Link> */}
            </div>
          </div>
          <div className="progress-container">
            <div className="progress">
              <CircularProgressbar
                value={percentage}
                className="progress-bar"
              />
            </div>
            <div className="number-percentage">
              <p className="percentage">
                {percentage}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="chapter-container">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter">Chapter 17</p>
            <button type="button" className="btn update">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BooksList;
