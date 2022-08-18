import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }



    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Items ordered : {cart.length}</p>

            <small>
              <table>
                    <tr>
                        <td>Items :</td>
                        <td>${}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${}</td>
                    </tr>
                    <tr className='total-row'>
                        <td>Order Total:</td>
                        <td>${}</td>
                    </tr>
                </table>
            </small>

        </div>
    );
};

export default Cart;