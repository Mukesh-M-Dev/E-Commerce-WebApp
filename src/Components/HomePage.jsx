import React,{useState} from 'react'
import ProfileView from '../View/ProfileView'
import HeaderView from '../View/HeaderView';
import CartView from '../View/CartView';
import ProdcutView from '../View/ProdcutView';
import OrderView from '../View/OrderView';

const HomePage = ({userName}) => {
     const [currentPage, setCurrentPage] = useState("");

  const components = {
    profile: ProfileView,
    cart: CartView,
    produt: ProdcutView,
    order: OrderView
  };

  const DynamicComponent = components[currentPage];

     function showPage(page){
        setCurrentPage(page);
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
    <div id="main-app" className="">
        <HeaderView userName={userName} showPage={showPage}/>
    <main>
        {DynamicComponent ? <DynamicComponent /> :
            <section id="home" className="page-section active">
                <div className="container">
                    <div className="hero">
                        <div className="hero-content">
                            <h1>Premium Electronics</h1>
                            <p>Discover the latest technology at unbeatable prices</p>
                            <button className="hero-cta" onClick={()=>showPage('ProdcutView')}>
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
        }
            

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
                                <button className="btn btn-success" onClick={()=>showAddProductModal}>
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

            

        </main>
        </div>
  )
}

export default HomePage