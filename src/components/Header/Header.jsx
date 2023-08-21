import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon

function Header() {
  return (
    <header className="header">
      <h1 className="title">Fake Store</h1>
      <div className="shopping-cart">
        <FaShoppingCart /> {/* Using the shopping cart icon */}</div>
    </header>
  );
}

export default Header;
