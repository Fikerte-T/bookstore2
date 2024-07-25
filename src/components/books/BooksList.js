import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const BooksList = ({ books }) => {
  // console.log(books);
  // const { id, title, category } = props;
  const [author] = useState('Haddis Alemayehu');
  const percentage = 60;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="books-container">
      {books.map((book) => (
        <div>
          <div className="book-info">
            <div className="books">
              <p className="book-category">{book.category}</p>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{author}</p>
            </div>
            <div className="util-btn-container">
              <button className="util-btn" type="button">Comments</button>
              <button className="util-btn" type="button" onClick={() => removeBookFromStore(book.item_id)}>Remove</button>
              <button className="util-btn" type="button">Edit</button>
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

// BooksList.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

export default BooksList;
