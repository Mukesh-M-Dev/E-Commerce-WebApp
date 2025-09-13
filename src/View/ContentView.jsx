import React from 'react'

const ContentView = () => {
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
    <main>
            {/* <!-- Home Page --> */}
            <section id="home" className="page-section active">
                <div className="container">
                    <div className="hero">
                        <div className="hero-content">
                            <h1>Premium Electronics</h1>
                            <p>Discover the latest technology at unbeatable prices</p>
                            <button className="hero-cta" onClick={showPage('products')}>
                                Shop Now <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="categories">
                        <h2 className="section-title">Shop by Category</h2>
                        <div className="category-grid" id="category-grid">
                            {/* <!-- Categories will be loaded here --> */}
                        </div>
                    </div>

                    <div className="featured-products">
                        <h2 className="section-title">Featured Products</h2>
                        <div className="product-grid" id="featured-products">
                            {/* <!-- Featured products will be loaded here --> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Admin Panel --> */}
            <section id="admin" className="page-section">
                <div className="container">
                    <div className="admin-panel">
                        <div className="admin-header">
                            <h1 className="admin-title">
                                <i className="fas fa-tachometer-alt"></i>
                                Admin Dashboard
                            </h1>
                        </div>

                        {/* <!-- Admin Stats --> */}
                        <div className="admin-stats">
                            <div className="stat-card">
                                <div className="stat-number" id="total-products">0</div>
                                <div className="stat-label">Total Products</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number" id="total-orders">0</div>
                                <div className="stat-label">Total Orders</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number" id="total-users">0</div>
                                <div className="stat-label">Registered Users</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number" id="total-revenue">$0</div>
                                <div className="stat-label">Total Revenue</div>
                            </div>
                        </div>

                        {/* <!-- Product Management --> */}
                        <div className="admin-section">
                            <div className="section-header">
                                <h2 className="section-title">Product Management</h2>
                                <button className="btn btn-success" onClick={showAddProductModal()}>
                                    <i className="fas fa-plus"></i>
                                    Add Product
                                </button>
                            </div>

                            <div className="products-table">
                                <div className="table-container">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Brand</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="admin-products-table">
                                            {/* <!-- Products will be loaded here --> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order Management --> */}
                        <div className="admin-section">
                            <div className="section-header">
                                <h2 className="section-title">Order Management</h2>
                            </div>

                            <div id="admin-orders-list">
                                {/* <!-- Orders will be loaded here --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Products Page --> */}
            <section id="products" className="page-section">
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

            {/* <!-- Categories Page --> */}
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

            {/* <!-- Orders Page (User) --> */}
            <section id="orders" className="page-section">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>My Orders</span>
                    </div>

                    <h2 className="section-title">My Orders</h2>
                    
                    <div id="user-orders-list">
                        {/* <!-- User orders will be loaded here --> */}
                    </div>
                </div>
            </section>

            {/* <!-- Cart Page --> */}
            <section id="cart" className="page-section">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>Shopping Cart</span>
                    </div>

                    <h2 className="section-title">Shopping Cart</h2>
                    
                    <div className="cart-container">
                        <div className="cart-header">
                            <h3 className="cart-title">Your Items</h3>
                        </div>
                        <div className="cart-items" id="cart-items">
                            {/* <!-- Cart items will be loaded here --> */}
                        </div>
                    </div>

                    <div className="cart-summary" id="cart-summary" style={{display: "none"}}>
                        <h3 className="summary-title">Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span id="subtotal">$0.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span id="shipping">$0.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax:</span>
                            <span id="tax">$0.00</span>
                        </div>
                        <div className="summary-total">
                            <span>Total:</span>
                            <span id="total">$0.00</span>
                        </div>
                        <button className="checkout-btn" onClick={checkout()}>
                            <i className="fas fa-credit-card"></i>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </section>

            {/* Profile Page  */}
            <section id="profile" className="page-section">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={showPage('home')}>Home</a>
                        <i className="fas fa-chevron-right"></i>
                        <span>My Account</span>
                    </div>

                    <h2 className="section-title">My Account</h2>
                    
                    <div className="profile-container">
                        <div className="profile-sidebar">
                            <div className="profile-avatar">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="profile-name" id="profile-name">User</div>
                            <div className="profile-email" id="profile-email">user@example.com</div>
                            <div id="profile-role-badge" className="admin-badge hidden">
                                <i className="fas fa-shield-alt"></i> ADMIN
                            </div>
                            
                            <nav>
                                <ul className="profile-nav">
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link active" onClick={showProfileTab('overview')}>
                                            <i className="fas fa-tachometer-alt"></i>
                                            Overview
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={showProfileTab('orders')}>
                                            <i className="fas fa-box"></i>
                                            My Orders
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={showProfileTab('wishlist')}>
                                            <i className="fas fa-heart"></i>
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={showProfileTab('settings')}>
                                            <i className="fas fa-cog"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={logout()}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="profile-content" id="profile-content">
                           {/*Profile content will be loaded here */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default ContentView