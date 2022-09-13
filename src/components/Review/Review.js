import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    // database er information load korbo
    const [cart, setCart] = useState([]);
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
            {
                cart.map(pd =>
                    <ReviewItem
                        key={pd.key}
                        product={pd}
                    >
                    </ReviewItem>)
            }

        </div>
    );
};

export default Review;