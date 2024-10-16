import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for navigation
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();  // Replacing useHistory with useNavigate

    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
            <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
            <button onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
    );
};

export default CartPage;
