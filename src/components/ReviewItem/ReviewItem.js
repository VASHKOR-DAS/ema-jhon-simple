import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    console.log(props);
    const {name, price, seller, quantity} = props.product;
    return (
        <div className='review-item'>
            <h4>{name}</h4>
            <p className='price'><small>${price}</small></p>
            <p><small>sold by : {seller}</small></p>
            <p>Quantity : {quantity}</p>
            <button className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;