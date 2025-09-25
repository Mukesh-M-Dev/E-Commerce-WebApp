import React from 'react'
import CreateProduct from './CreateProduct';
import productDetails from '../../assets/productDetails.json';
import categoryDetails from '../../assets/categoryDetails.json';
import CategoryGrid from '../Category/CategoryGrid';

function createProductFromTemplate(template, overrides = {}) {
    return {
        id: Date.now() + Math.random(),
        name: overrides.name || template.name,
        brand: overrides.brand || template.brand,
        price: overrides.price || template.basePrice,
        originalPrice: overrides.originalPrice || null,
        category: template.category,
        icon: template.icon,
        description: overrides.description || template.description,
        stock: overrides.stock || 100,
        rating: 4.0 + Math.random(),
        reviews: Math.floor(Math.random() * 1000) + 100,
        featured: overrides.featured || false,
        onSale: overrides.onSale || false,
        status: 'active',
        createdAt: new Date().toISOString()
    };
}


const ProductView = () => {
    let products = productDetails.map(product => createProductFromTemplate(product));
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
                            {categoryDetails.map(category => (
                                <CategoryGrid key={category.id} category={category} />
                            ))}
                        </div>
                    </div>

                    <div className="product-grid" id="all-products">
                        {/* <!-- All products will be loaded here --> */}
                        {products.map(product => <CreateProduct key={product.id} product={product} />)}
                    </div>
                </div>
            </section>
  )
}

export default ProductView