import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    // const total = cart.reduce((total, product) => total + product.price , 0)

    let items = 0;
    let tax = 0;
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        items = items + product.price;
        tax = tax + product.price / 10;
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 500) {
        shipping = 0;
    }
    else if (total > 200) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered : {cart.length}</p>

              <table>
                    <tr>
                        <td>Items :</td>
                        <td>${formatNumber(items)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${formatNumber(shipping)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${formatNumber(total+shipping)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${formatNumber(tax)}</td>
                    </tr>
                    <tr className='total-row'>
                        <td>Order Total:</td>
                        <td>${formatNumber(total+shipping+tax)}</td>
                    </tr>
                </table>

        </div>
    );
};

export default Cart;