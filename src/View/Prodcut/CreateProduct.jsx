import React from 'react'

const CreateProduct = ({product}) => {
        //allContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const isOutOfStock = product.stock <= 0;
    const isInWishlist = false; //wishlist.some(item => item.id === product.id);
    function showProductDetail(){

    }
    function addToCart(productId){

    }
    function toggleWishlist(productId){

    }
    return (
        <div className="product-card" onClick={() => showProductDetail ? showProductDetail(product.id) : null}>
            <div className="product-image">
                <i className={product.icon}></i>
            </div>
            <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price">
                    <span className="current-price">{product.price.toFixed(2)}</span>
                    {product.originalPrice ? `<span className="original-price">${product.originalPrice.toFixed(2)}</span>` : ''}
                    {discount > 0 ? `<span className="discount">${discount}% OFF</span>` : ''}
                </div>
                <div className="product-rating">
                    <span className="stars">{stars}</span>
                    <span className="rating-text">{product.rating.toFixed(1)} ({product.reviews})</span>
                </div>
                <div className="product-actions">
                    <button className={`add-to-cart ${isOutOfStock ? '' : ''}`} 
                            onClick={(event) => {
                                event.stopPropagation();
                                if (!isOutOfStock) addToCart(product.id);
                            }} 
                            disabled={isOutOfStock}>
                        <i className="fas fa-cart-plus"></i> 
                        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button className={`wishlist-btn ${isInWishlist ? 'active' : ''}`} onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(product.id);
                    }}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
                {product.stock <= 5 && product.stock > 0 ? <div style={{ color: 'var(--warning-color)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.5rem' }}>Only {product.stock} left!</div> : ''}
            </div>
        </div>)
}

export default CreateProduct