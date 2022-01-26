import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Books />} />
        <Route exact="true" path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
