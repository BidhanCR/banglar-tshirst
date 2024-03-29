import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/grandpa'>GrandPa</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </nav>
    );
};

export default Header;