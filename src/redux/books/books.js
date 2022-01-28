// action types
const ADD_BOOK = 'bookstore2/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore2/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore2/books/GET_BOOKS';
const booksUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hVobthKhfGMXGnlerGtB/books';


const initialState = [];

const sendHttpRequest = (method, url, data) => fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data? {'Content-type': 'application/json'} : {},
})

const postBookToApi = async(book) => {
    await sendHttpRequest('POST', booksUrl, {
        item_id: book.item_id,
        title: book.title,
        category: book.category
    })
}

export const getBooksFromApi = () => (async (dispatch) => {
    const response = await sendHttpRequest('GET', booksUrl);
    const data = await response.json();
    const booksData = Object.entries(data).map(([itemId, [book]]) => ({
        item_id: itemId,
        title: book.title,
        category: book.category
    }))
    dispatch({
      type: GET_BOOKS,
      booksData
    })
})
// action creators
export const addBook = (book) => async (dispatch) => {
  await postBookToApi(book);
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
        return [...state, ...action.booksData]
    default:
      return state;
  }
};

export default booksReducer;
