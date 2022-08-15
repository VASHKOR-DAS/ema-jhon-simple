import React from 'react';
import logo from '../../images/logo.png'; // 1 level-up a hole ../
import './Header.css' //same folder hole ./

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" srcset="" />
        </div>
    );
};

export default Header;