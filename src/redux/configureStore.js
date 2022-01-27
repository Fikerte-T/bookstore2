import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});
const store = createStore(reducer, applyMiddleware(logger));

export default store;