import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' && author === '') { return; }

    const newBook = {
      item_id: uuid4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="add-book">
      <h3 className="add-book-title">ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className="inputs" type="text" placeholder="title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <select defaultValue="category" required className="inputs category" name="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="History">History</option>

        </select>
        <button className="btn" type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
