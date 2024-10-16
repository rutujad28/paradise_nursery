import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const totalItems = useSelector(state => state.cart.totalItems);

    return (
        <header>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart <span>{totalItems}</span></Link>
            </nav>
        </header>
    );
};

export default Header;
