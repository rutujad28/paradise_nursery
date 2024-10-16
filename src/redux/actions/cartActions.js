export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (price) => ({
    type: ADD_TO_CART,
    payload: price,
});
