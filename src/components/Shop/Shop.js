/*
import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div>
            <h1>This is Shop</h1>
            
            <ul>    
                {
                    products.map(product => 
                        <li>
                            {product.name}
                        </li>
                    )
                }
            </ul>
            
           
        </div>
    );
};

export default Shop;
*/

import fakeData from '../../fakeData';
import React, { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                  
                {
                    products.map(product => <Product>{product.name}</Product>)
                }
                
            </div>
            <div className="cart-container">
                <h3>
                    This is cart
                </h3>
            </div>
        </div>
    );
};

export default Shop;