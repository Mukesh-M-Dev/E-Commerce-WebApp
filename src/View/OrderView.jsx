import React from 'react'

const OrderView = () => {
    function showPage(){
        
    }
  return (
    
            <section id="orders" className="page-section active">
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
  )
}

export default OrderView