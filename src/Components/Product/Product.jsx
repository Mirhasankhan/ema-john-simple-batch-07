import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name,ratings, seller, price} = props.product;
    return (
        <div className='single-product'>
           <img src={img} alt="" />
           <div className="product-info">
            <h5>{name}</h5>
            <h6>Price: ${price}</h6>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           </div>
           <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;