import React from 'react'
import AnchorElements from './AnchorElements';

const HeaderView = ({userName,showPage}) => {
        const [activeLink, setActiveLink] = React.useState("home");

    function toggleMobileMenu(page){
        console.log(page)
    }
    const navArray = [{linktag:'home',displayName:"Home",access:true},{linktag:'product',displayName:"Products",access:true},{linktag:'category',displayName:"Categories",access:true},{linktag:'order',displayName:"My Orders",access:true},{linktag:'admin',displayName:"Admin Panel",access:false}]
    function searchProducts (){
    }
    function setActiveAnchor (link){
        setActiveLink(link);
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

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </button>

                    <nav className="nav-menu" id="nav-menu">
                        { navArray.map(nav => <AnchorElements key={nav.linktag} showPage={showPage} setActiveAnchor={setActiveAnchor} params={nav} activeLink={activeLink} /> )}
                    </nav>

                    <div className="search-container user-only">
                        <input type="text" className="search-input" placeholder="Search products..." id="search-input"/>
                        <button className="search-btn" onClick={searchProducts}>
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