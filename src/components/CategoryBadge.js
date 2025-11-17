import React from 'react';
import { getCategoryColor } from '../utils/categoryHelper';
import './CategoryBadge.style.css';

const CategoryBadge = ({ category }) => {
  if (!category) return null;

  const color = getCategoryColor(category);

  return (
    <span 
      className="category-badge" 
      style={{ background: color }}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;

