import React from 'react'

const ProductView = () => {
      function showPage(page){
        console.log(page)
    }
    function filterProducts (){

    }
  return (
            <section id="products" className="page-section active">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Products</span>
                    </div>

                    <h2 className="section-title">All Products</h2>
                    
                    <div className="filters">
                        <h3 className="filter-title">Filter by Category</h3>
                        <div className="filter-group" id="category-filters">
                            <button className="filter-btn active" onClick={filterProducts('all')}>All</button>
                            {/* <!-- Category filters will be loaded here --> */}
                        </div>
                    </div>

                    <div className="product-grid" id="all-products">
                        {/* <!-- All products will be loaded here --> */}
                    </div>
                </div>
            </section>
  )
}

export default ProductView