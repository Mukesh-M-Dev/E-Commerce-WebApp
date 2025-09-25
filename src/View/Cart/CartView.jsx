import React from 'react'

const CartView = () => {
      function showPage(page){
        console.log(page)
    }
    function checkout (){
        
    }
  return (
            <section id="cart" className="page-section active">
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

                    <div className="cart-summary" id="cart-summary">
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
  )
}

export default CartView