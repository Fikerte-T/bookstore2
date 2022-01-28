import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category] = useState('Fiction');
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
    <div className='add-book'>
      <h3 className='add-book-title'>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input className='inputs' type="text" placeholder="title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        {/* <input type="text" placeholder="author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} /> */}
				<select required className="inputs category" name="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled selected>Category</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button className='btn' type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
