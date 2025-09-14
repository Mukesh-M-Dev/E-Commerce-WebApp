import React from 'react'

const ProfileView = () => {
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
            <section id="profile" className="page-section active">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#" onClick={()=>showPage('home')}>Home</a>
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
                                        <a href="#" className="profile-nav-link active" onClick={()=>showProfileTab('overview')}>
                                            <i className="fas fa-tachometer-alt"></i>
                                            Overview
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={()=>showProfileTab('orders')}>
                                            <i className="fas fa-box"></i>
                                            My Orders
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={()=>showProfileTab('wishlist')}>
                                            <i className="fas fa-heart"></i>
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={()=>showProfileTab('settings')}>
                                            <i className="fas fa-cog"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={()=>logout()}>
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
  )
}

export default ProfileView