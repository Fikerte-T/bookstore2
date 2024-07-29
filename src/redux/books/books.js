import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hVobthKhfGMXGnlerGtB/books';

const initialState = {
  status: 'idle',
  books: [],
  error: null,
};

export const addNewBook = createAsyncThunk('books/addNewBook', async (book) => {
  await axios.post(booksUrl, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(booksUrl);
  const { data } = response;
  const booksData = Object.entries(data).map(([itemId, [book]]) => ({
    item_id: itemId,
    title: book.title,
    category: book.category,
  }));
  return booksData;
});

export const updateBook = createAsyncThunk('books/updateBook', async (editedBook) => {
  const response = await axios.put(`${booksUrl}/${editedBook.item_id}`, editedBook);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${booksUrl}/${id}`, { item_id: id });
  return response;
});

// reducer
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase('books/fetchBooks/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // remove book
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.meta.arg;
        if (id) {
          state.books = state.books.filter((book) => book.item_id !== id);
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // add new book
      .addCase(addNewBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.meta.arg);
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // update book
      .addCase(updateBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBook.fulfilled, (state) => {
        state.status = 'succeeded';
        // state.books.push(action.meta.arg)
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default booksSlice.reducer;
