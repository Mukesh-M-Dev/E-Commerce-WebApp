import React from 'react'

const HeaderView = ({userName,showPage}) => {
    function toggleMobileMenu(page){
        console.log(page)
    }
    function searchProducts (){

    }
    function toggleTheme (){
        document.body.setAttribute('data-theme', document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        const themeIcon = document.getElementById('theme-icon');
        if (document.body.getAttribute('data-theme') === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
  return (
    <header>
            <div className="container">
                <div className="header-content">
                    <a href="#" className="logo" id="header-logo" onClick={()=>showPage('home')}>
                        <i className="fas fa-shopping-bag"></i>
                        TechMart
                    </a>

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu()}>
                        <i className="fas fa-bars"></i>
                    </button>

                    <nav className="nav-menu" id="nav-menu">
                        <a href="#" className="nav-link active" onClick={()=>showPage('home')} data-page="home">Home</a>
                        <a href="#" className="nav-link" onClick={()=>showPage('product')} data-page="products">Products</a>
                        <a href="#" className="nav-link" onClick={()=>showPage('category')} data-page="categories">Categories</a>
                        <a href="#" className="nav-link user-only" onClick={()=>showPage('order')} data-page="orders">My Orders</a>
                        <a href="#" className="nav-link admin-only hidden" onClick={()=>showPage('admin')} data-page="admin">Admin Panel</a>
                    </nav>

                    <div className="search-container user-only">
                        <input type="text" className="search-input" placeholder="Search products..." id="search-input"/>
                        <button className="search-btn" onClick={searchProducts()}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="header-actions">
                        <div id="admin-badge" className="admin-badge hidden">
                            <i className="fas fa-shield-alt"></i> ADMIN
                        </div>
                        
                        <button className="theme-toggle" onClick={toggleTheme}>
                            <i className="fas fa-moon" id="theme-icon"></i>
                        </button>
                        
                        <button className="cart-btn user-only" onClick={()=>showPage('cart')}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cart-count" id="cart-count">0</span>
                        </button>

                        <div className="user-menu">
                            <button className="btn btn-secondary" onClick={()=>showPage('profile')}>
                                <i className="fas fa-user"></i>
                                <span id="user-name">{userName}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default HeaderView