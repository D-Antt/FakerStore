import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ConditionalCategories from './components/ConditionalCategories/ConditionalCategories';
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products initially
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  
    // Fetch categories
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
        <ConditionalCategories categories={categories} onSelectCategory={handleSelectCategory} /> {/* Use the new component */}
        <Routes>
          <Route path="/" element={<Homepage products={products} />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
