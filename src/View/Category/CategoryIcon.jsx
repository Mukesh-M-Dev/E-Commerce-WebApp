import React from 'react'

const CategoryIcon = ({category}) => {
    function filterProducts(categoryId) {
        console.log(categoryId);
    }
    //alert("categoryGrid")
  return (
        <div className="category-card" onClick={() => filterProducts(category.id)}>
            <div className="category-icon">
                <i className={category.icon}></i>
            </div>
            <h3 className="category-title">{category.name}</h3>
            <p className="category-count">{category.count} products</p>
        </div>
        )
  
}

export default CategoryIcon