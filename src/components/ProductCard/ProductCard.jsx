import React from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';


// this is not the heart we are looking for
function ProductCard({ product }) {
  return (
    <div className="product-card">
        <div className="heart-icon">
        <FaHeart />
      </div>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
}

export default ProductCard;
