import React from 'react';
import logo from '../../images/logo.png'; // 1 level-up a hole ../
import './Header.css' //same folder hole ./

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" srcset="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;