import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalShipping = 0;
    let total = 0;
    for(let singleProduct of cart){
        const newPrice = singleProduct.price;
        total = total + newPrice;
        totalShipping = totalShipping + singleProduct.shipping;      
    }
    const tax = total*7 / 100;
    const grandTotal = total +totalShipping +tax;    
    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Products: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;