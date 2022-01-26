// action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOk';

const initialState = [];

// action creators
const addBook = (payload) => ({
    type: ADD_BOOK,
    payload
})

const removeBook = id => ({
    type: REMOVE_BOOK,
    id
})

// reducer
const booksReducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_BOOK: 
            return [...state, action.payload];
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
}

export default booksReducer;
