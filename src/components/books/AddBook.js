import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    // if (title === '' && author === '') { return; }

    const newBook = {
      item_id: uuid4(),
      title,
      category,
      author,
    };
    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="add-book">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="inputs" type="text" placeholder="Book title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} required />
        <select required className="inputs category" name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="" disabled>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>
        </select>
        <button className="btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
