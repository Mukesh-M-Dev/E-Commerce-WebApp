import React from 'react'
import categoryDetails from '../../assets/categoryDetails.json';
import CategoryIcon from './CategoryIcon';

const CategoryView = () => {
      function showPage(page){
        console.log(page)
    }
    
  return (
            <section id="categories" className="page-section active">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Categories</span>
                    </div>

                    <h2 className="section-title">All Categories</h2>
                    <div className="category-grid" id="all-categories">
                        {/* <!-- All categories will be loaded here --> */}
                        {categoryDetails.map(category => <CategoryIcon key={category.id} category={category} />)}
                    </div>
                </div>
            </section>
  )
}

export default CategoryView