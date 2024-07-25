import './App.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
