import React from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../Categories/Categories';

const ConditionalCategories = ({ categories, onSelectCategory }) => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Categories categories={categories} onSelectCategory={onSelectCategory} />;
  }

  return null;
};

export default ConditionalCategories;
