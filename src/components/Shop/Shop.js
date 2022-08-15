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