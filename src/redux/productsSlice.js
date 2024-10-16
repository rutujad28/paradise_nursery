import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Aloevera', price: 25, thumbnail: '/images/aloevera.png', inCart: false },
    { id: 2, name: 'Fiddle Leaf Fig', price: 30, thumbnail: '/images/fig.jpg', inCart: false },
    { id: 3, name: 'Succulent', price: 15, thumbnail: '/images/succulent.jpg', inCart: false },
    { id: 4, name: 'Peace Lily', price: 20, thumbnail: '/images/lily.jpg', inCart: false },
    { id: 5, name: 'Snake Plant', price: 22, thumbnail: '/images/snakeplant.jpg', inCart: false },
    { id: 6, name: 'Spider Plant', price: 18, thumbnail: '/images/spiderplant.jpg', inCart: false },
];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
