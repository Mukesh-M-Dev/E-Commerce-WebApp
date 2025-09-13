import React from 'react'

const SplashPage = () => {
  return (
     <div id="splash-screen">
        <div className="splash-logo">
            <i className="fas fa-shopping-bag"></i>
        </div>
        <h1 className="splash-title">TechMart</h1>
        <p className="splash-subtitle">Premium Electronics Store</p>
        <div className="loading-spinner"></div>
    </div>
  )
}

export default SplashPage