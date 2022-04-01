import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='menu container'>
            <div className='nav-logo'>
                <h2>Excellent Shop</h2>
            </div>
            <div className='nav-menu'>
                <Link to='/'>Home</Link>
                <Link to='/shops'>Shops</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>

        </nav>
    );
};

export default Header;