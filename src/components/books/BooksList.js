import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const BooksList = (props) => {
  const { id, title, category } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="books">
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

BooksList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BooksList;
