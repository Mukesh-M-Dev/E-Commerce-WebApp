import React from 'react'
import OrdersView from './OrdersView'
import WishlistView from './WishlistView'
import OverviewView from './OverviewView'
import SettingsView from './SettingsView'   

const ProfileView = ({logout}) => {
    const [currentView,setCurrentView] = React.useState('overview');
    function showCurrentView(e,view){
        e.preventDefault();
        const links = document.querySelectorAll('.profile-nav-link');
        links.forEach(link => link.classList.remove('active'));
        e.currentTarget.classList.add('active');
        setCurrentView(view);
    
    }
      function showPage(page){
        // alert(page)
         //setCurrentPage(page);    
    }
    const Components = {
    overview: OverviewView,
    orders: OrdersView,
    settings: SettingsView,
    wishlist: WishlistView,
  };
  const DynamicComponent = Components[currentView];
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
                                        <a href="#" className="profile-nav-link active" onClick={(e)=>showCurrentView(e,'overview')}>
                                            <i className="fas fa-tachometer-alt"></i>
                                            Overview
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={(e)=>showCurrentView(e,'orders')}>
                                            <i className="fas fa-box"></i>
                                            My Orders
                                        </a>
                                    </li>
                                    <li className="profile-nav-item user-only">
                                        <a href="#" className="profile-nav-link" onClick={(e)=>showCurrentView(e,'wishlist')}>
                                            <i className="fas fa-heart"></i>
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={(e)=>showCurrentView(e,'settings')}>
                                            <i className="fas fa-cog"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="profile-nav-item">
                                        <a href="#" className="profile-nav-link" onClick={()=>logout("Login")}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="profile-content" id="profile-content">
                           <DynamicComponent/>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ProfileView