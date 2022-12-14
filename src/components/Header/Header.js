import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/logo.png'; // 1 level-up a hole ../
import './Header.css' //same folder hole ./

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

return (
    <>

        <div className="navbar bg-yellow-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/shop'>Shop</a></li>
                        <li><a href='/review'>Review</a></li>
                        <li><a href='/inventory'>Manage Inventory</a></li>
                    </ul>
                </div>
                <a href='/' className="w-36"><img src={logo} alt="" /></a>
                {
                    <span>{user?.email}</span>
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/shop'>Shop</a></li>
                    <li><a href='/review'>Review</a></li>
                    <li><a href='/inventory'>Manage Inventory</a></li>
                </ul>
            </div>

            <div className="navbar-end">

                {user?.uid
                    ?
                    <a onClick={logOut} href='/login' className="mr-2 btn btn-sm btn-primary text-white">Log out</a>
                    :
                    <>
                        <a href='/login' className="mr-2 btn btn-sm btn-primary text-white">Log in</a>
                        <a href='/signup' className="btn btn-sm btn-success btn-outline text-white">Sign Up</a>
                    </>
                }

            </div>
        </div>
    </>
);
};

export default Header;