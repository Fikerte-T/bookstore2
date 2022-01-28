import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  books: booksReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
