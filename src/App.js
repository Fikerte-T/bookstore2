import './App.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import Navbar from './components/Navbar';
import EditBookForm from './components/EditBookForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        {/* <Redirect from="/" to="/books" /> */}
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/editBook/:bookId" element={<EditBookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
