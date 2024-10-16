// src/components/NavBar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import './NavBar.css'; // Ensure this file contains your existing styles

const NavBar = () => {
    // Get cart items from Redux
    const cartItems = useSelector(state => state.cart.items);
    // Calculate total items in the cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="navbar">
            <nav className="nav-content">
                <h1 className="brand-title">Paradise Nursery</h1>
                <p className="brand-subtitle">Where Green Meets Serenity</p>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/products">Products</a> {/* Added link to products page */}
                    <a href="/cart" className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {/* Show item count; default to 0 if no items in cart */}
                        <span className="cart-count">{totalItems > 0 ? totalItems : 0}</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
