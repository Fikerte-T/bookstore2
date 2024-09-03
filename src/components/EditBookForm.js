import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBook } from '../redux/books/books';

const EditBookForm = () => {
  const { bookId } = useParams();
  const book = useSelector((state) => state.books.books.find((book) => book.item_id === bookId));
  const [formData, setFormData] = useState(book);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(updateBook(formData));
  };
  return (
    <div>
      <h3 className="add-book-title">EDIT BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="inputs" type="text" placeholder="title" name="title" value={formData.title} onChange={handleChange} />
        <select required className="inputs category" name="Category" onChange={handleChange} value={formData.category}>
          <option value="" disabled>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
        </select>
        <button className="btn" type="submit">Save Book</button>
      </form>
    </div>
  );
};

export default EditBookForm;
