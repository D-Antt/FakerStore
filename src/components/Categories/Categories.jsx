import React from 'react';
import './Categories.css'; // Import the CSS file

function Categories({ categories, onSelectCategory }) {
  return (
    <nav className="categories">
      <button onClick={() => onSelectCategory('all')}>All</button> {/* "All" button */}
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </nav>
  );
}

export default Categories;
