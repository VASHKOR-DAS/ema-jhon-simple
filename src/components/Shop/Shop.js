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

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div>
            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>    
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
            
           
        </div>
    );
};

export default Shop;