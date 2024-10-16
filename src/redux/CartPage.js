// src/components/CartPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice'; // Adjust the import path as needed
import './CartPage.css'; // Import your CSS for styling

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux

    // Calculate total cost
    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id })); // Dispatch remove action
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total">
                <h2>Total Cost: ${totalCost.toFixed(2)}</h2> {/* Display total cost */}
            </div>
        </div>
    );
};

export default CartPage;
