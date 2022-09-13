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
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("Product added", product);

        // ...cart hocche ager cart a ja ase seta add korbo+ naw jeta ase oita set cart a add krbo
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">


                {/* ProductDetail components a Add to cart button ta dekhabo na,
                but shop.js a dekhabo.
                er jnne ProductDetail a value false,
                r aikhane value true */}
                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCard={true}
                        handleAddProduct = {handleAddProduct}
                        product = {pd}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;