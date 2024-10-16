import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    const totalCount = useSelector(state => state.cart.totalCount); // Access totalCount from the cart state

    return (
        <div>
            <Link to="/cart">
                Cart <span>({totalCount})</span>
            </Link>
        </div>
    );
};

export default CartIcon;
