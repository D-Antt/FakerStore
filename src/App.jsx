import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'; // Importing the Header component
import Categories from './components/Categories/Categories'; // Importing the Categories component
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import './App.css'

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
    <div className='app-container'>
      <Header />
      <Categories categories={categories} onSelectCategory={handleSelectCategory} />
      {/* Render products based on the selected category */}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
