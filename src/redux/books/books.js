import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hVobthKhfGMXGnlerGtB/books';

const initialState = {
  status: 'idle',
  books: [],
  error: null,
};

// const postBookToApi = async (book) => {
//   const response = await sendHttpRequest('POST', booksUrl, {
//     item_id: book.item_id,
//     title: book.title,
//     category: book.category,
//     author: '',
//   });
//   // console.log(res)
//   return response;
// };

export const fetchBooks = createAsyncThunk('books/fetchBooks', async() => {
  const response = await axios.get(booksUrl);
  const data = response.data;
  const booksData = Object.entries(data).map(([itemId, [book]]) => ({
    item_id: itemId,
    title: book.title,
    category: book.category,
  }))
  return booksData;
});

// export const addBook = (book) => async (dispatch) => {
//   const res = await postBookToApi(book);
//   // console.log(res)
//   dispatch({
//     type: ADD_BOOK,
//     book,
//   });
//   return res;
// };

export const removeBook = createAsyncThunk('books/removeBook', async(id) => {
  const response = await axios.delete(`${booksUrl}/${id}`, {item_id: id})
  console.log(response)
  return response
})

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
        console.log(action.payload)
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //remove book
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.meta.arg;
        if(id) {
          state.books = state.books.filter(book => book.item_id !== id)
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});
export default booksSlice.reducer;
