import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Homepage.css'; // Importing the CSS file

function Homepage({ products }) {
  return (
    <div className="homepage">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
