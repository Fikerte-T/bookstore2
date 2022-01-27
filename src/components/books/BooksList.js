import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const BooksList = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="books">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

BooksList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BooksList;
