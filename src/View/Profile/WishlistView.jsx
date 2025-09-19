import React from 'react'

const WishlistView = () => {
  return (
    <><h3>My Wishlist</h3>
                    <div className="empty-state">
                        <div className="empty-icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h4 className="empty-title">Your wishlist is empty</h4>
                        <p>Add products to your wishlist to save them for later</p>
                        <button className="btn btn-primary">
                            Browse Products
                        </button>
                    </div></>
  )
}

export default WishlistView