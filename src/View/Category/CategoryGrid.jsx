import React from 'react'

const CategoryGrid = ({ category }) => {
    function filterProducts(categoryId) {
        console.log(categoryId);
    }
  return (
            <button className="filter-btn" onClick={() => filterProducts(category.id)}>{category.name}</button>
        
  )
}

export default CategoryGrid