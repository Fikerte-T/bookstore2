import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
}, applyMiddleware(thunk));

export default store;
