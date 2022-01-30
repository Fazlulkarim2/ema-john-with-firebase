import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className ="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Reviw</Link>
                <Link to="/inventory">Mangae Inventory</Link>
                {user.email && <span style={{color:'white'}}>Hello {user.displayName} </span>}
                {
                    user.email?
                    <button onClick={logOut}>log Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
                

            </nav>
        </div>
    );
};

export default Header;