import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  const handleSelectCategory = (category) => {
    if (category === 'all') {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
  };

  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Categories categories={categories} onSelectCategory={handleSelectCategory} />
        <Routes>
          <Route path="/" element={<Homepage products={products} />} />
          {/* Add other routes here if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
