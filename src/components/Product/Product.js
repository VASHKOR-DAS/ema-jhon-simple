import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

// kono data parameter hisebe newar jnno 'props' use hoise
const Product = (props) => {
    // props er moddhe kichu ase kina seta janar jnne, r akhane product ta holo property er naam 
    // console.log(props);

    const { img, name, seller, price, stock, key } = props.product //function er parameter er moto kaj kore
    return (
        <div className="product">
            <div>
                <img src={img} alt="product img" srcset="" />
            </div>
            <div className="product-name">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                    className="main-button" 
                    onClick={ () => (props.handleAddProduct(props.product))} /* function auto execute jeno na hoy, tai er vitore 1ta () => likhte hoy */
                >
                        <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;