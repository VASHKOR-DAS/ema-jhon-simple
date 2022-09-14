import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    // database er information load korbo
    const [cart, setCart] = useState([]);



    //remove product
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }




    useEffect(() => {
        //cart er vitore data gulo rakhbo
        const savedCart = getDatabaseCart();
        // console.log(savedCart); jegulo click korci tarder full object

        const productKeys = Object.keys(savedCart);
        // console.log(productKeys); only click kora database er productKeys gulo show hbe

        /* 
            localStores er productKeys gulo k map kore, 
            localStores er sob product gulo theke find kore
            database er key er sathe jegulo match kore sei product gulo,
            & 
            jei key gulo localStores a match korse tar quantity gulo k
            const cartProducts a rakha holo

            product.quantity = getDatabaseCart()[key];
            localStores er [key] gulo tar matching countable number

        */
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);


    }, [])
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>

            {/* order review te product er review gulo show korabo */}
            <div className="twin-container">
                <div className="product-container">
                    {
                        cart.map(pd =>
                            <ReviewItem
                                key={pd.key}
                                removeProduct={removeProduct}
                                product={pd}
                            >
                            </ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button className='main-button'>Place Order</button>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Review;