import React from 'react';
import './Product.css'

// kono data parameter hisebe newar jnno 'props' use hoise
const Product = (props) => {
    // props er moddhe kichu ase kina seta janar jnne, r akhane product ta holo property er naam 
    console.log(props.product);

    const { img, name, seller, price, stock } = props.product //function er parameter er moto kaj kore
    return (
        <div className="product">
            <div>
                <img src={img} alt="product img" srcset="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p><small>by : {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
            </div>
        </div>
    );
};

export default Product;