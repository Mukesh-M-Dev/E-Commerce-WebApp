import React from 'react'

const CategoryView = () => {
      function showPage(page){
        console.log(page)
    }
    function toggleMobileMenu(page){
        console.log(page)
    }
    function searchProducts (){

    }
    function toggleTheme (){
        
    }
    function showAddProductModal (){
        
    }
    function filterProducts (){

    }
    function checkout (){
        
    }
    function showProfileTab(){
        
    }
    function logout (){

    }
  return (
            <section id="categories" className="page-section">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Categories</span>
                    </div>

                    <h2 className="section-title">All Categories</h2>
                    <div className="category-grid" id="all-categories">
                        {/* <!-- All categories will be loaded here --> */}
                    </div>
                </div>
            </section>
  )
}

export default CategoryView