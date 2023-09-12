import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';

function ProductCard({ product }) {
  return (
    <Link to={`/details/${product.id}`}>  {/* Wrap the entire card with a Link */}
      <div className="product-card">
        <div className="heart-icon">
          <FaHeart />
        </div>
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
