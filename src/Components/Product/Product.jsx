import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {  
    const {img, name,ratings, seller, price, id} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='single-product'>
           <img src={img} alt="" />
           <div className="product-info">
            <h5>{name}</h5>
            <h6>Price: ${price}</h6>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;