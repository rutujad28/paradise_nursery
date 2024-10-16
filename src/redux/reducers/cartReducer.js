import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
    totalItems: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
